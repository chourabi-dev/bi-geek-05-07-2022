var sha1 = require('sha1');
var jwt = require('jsonwebtoken');

exports.createNewAccount = function(req,res){
    let request = [];

    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{

        let  body = JSON.parse(Buffer.concat(request).toString());

        
        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server)=>{
            const db = server.db('parcautobigeek');


            /**
             * db.collection('users').find({ email: body.email }).toArray().then((resUsers)=>{
                if (resUsers.length == 1 ) {
                    // oups !! 
                } else {
                    // insert
                }
            })
             */


            db.collection('users').findOne({ email: body.email }).then((resUser)=>{
                if (resUser == null) {
                    // OK

                    //crypt password before insert
                    body.password = sha1(body.password); 

                    db.collection('users').insertOne(body).then((resInsert)=>{
                        res.send({success:true})
                    }).catch((err)=>{
                        res.send({ success:false, message:"Something went wrong" })
                    })
                } else {
                    // oups
                    res.send({ success:false, message:"Looks like this email is already in use by another user." })
                }
            })


        }).catch((error)=>{
            console.log(error);
            res.send({ success:false, message:"Err db" })
        })

    })
}


exports.authUser = function(req,res){
    let request = [];

    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{

        let body = JSON.parse(Buffer.concat(request).toString());


        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server)=>{
            const db = server.db('parcautobigeek');

                                            // tchourabi@gmail.com   //123456
            db.collection('users').findOne({ email:body.email, password:sha1(body.password) }).then((userData)=>{
                if (userData !== null) {
                    
                    delete userData.password;

                    var token = jwt.sign({ user:userData   }, 'parcauto2022');


                    res.send({ success:true , token:token  })
                } else {
                    res.send({ success:false, message:"Wrong email or password." })
                }
            }).catch((err)=>{
                res.send({ success:false, message:"Something went wrong" })
            })


        }).catch((error)=>{
            console.log(error);
            res.send({ success:false, message:"Err db" })
        })

    })
}

exports.getUserInfo = function(req,res){
    const token = req.headers.authorization;
    try {
        var decoded = jwt.verify(token, 'parcauto2022');
        res.send({ info : decoded.user })
    } catch (error) {
        res.send({ success:false, message:"session expired"});
    }


}