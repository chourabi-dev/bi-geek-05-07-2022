exports.createNewStudent = function(req,res){
    

    let request = [];
    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{
        console.log(request);
        const body = JSON.parse(Buffer.concat(request).toString());


        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server)=>{
            const db = server.db('api');


            db.collection('students').insertOne(body).then((resInsert)=>{
                res.send({success : true, message:"student inserted successfully."})

            }).catch((err)=>{
                res.send({success : false, message:"Something went wrong."})
                
            })
        }).catch((err)=>{
            res.send({success : false, message:"Err contacting db server."})
            
        })


    })

}