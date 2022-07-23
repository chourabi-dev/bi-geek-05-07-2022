const { ObjectId } = require('mongodb');
const url = require('url');


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



exports.getStudentsList = function (req,res){ 

        const MongoClient = require('mongodb').MongoClient; 
        MongoClient.connect('mongodb://localhost:27017').then((server)=>{
            const db = server.db('api');


            let filter = {};

            const queries =  url.parse(req.url,true).query;


            if ( queries.domaine ) {
                filter.domine = queries.domaine
            }


            db.collection('students').find(filter).toArray().then((data)=>{
                res.send({success : true, students: data}) 
            }).catch(
                (e)=>{
                    res.send({success : false, message:"Something went wrong."})  
                }
            )
            
            

        }).catch((err)=>{
            res.send({success : false, message:"Err contacting db server."}) 
        }) 
    
}





exports.updateStudents = function(req,res){

    let request = [];
    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{

         
        const body = JSON.parse(Buffer.concat(request).toString()); 

        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server)=>{
            const db = server.db('api');



            let filter = {};

            const queries =  url.parse(req.url,true).query;


            if ( queries.domaine ) {
                filter.domine = queries.domaine
            }


            db.collection('students').updateMany(filter,{ $set:body }).then((data)=>{
                res.send({success : true, message: "updated successfully"}) 
            }).catch(
                (e)=>{
                    res.send({success : false, message:"Something went wrong."})  
                }
            ) 

        }).catch((err)=>{
            res.send({success : false, message:"Err contacting db server."}) 
        }) 
    }) 
}




exports.updateOneStudent = function(req,res){

    let request = [];
    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{

         
        const body = JSON.parse(Buffer.concat(request).toString()); 

        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server)=>{
            const db = server.db('api');



            let filter = {};

            const queries =  url.parse(req.url,true).query;


            if ( queries.id ) {
                filter._id = ObjectId(queries.id)
            }else{
                res.send({success : false, message:"ID param is required"}) 
            }


            db.collection('students').updateOne( filter, { $set:body }).then((data)=>{ 

                res.send({success : true, message: "updated successfully"})  
            }).catch(
                (e)=>{
                    res.send({success : false, message:"Something went wrong."})  
                }) 



        }).catch((err)=>{
            res.send({success : false, message:"Err contacting db server."}) 
        }) 
    }) 
}


exports.deleteOneStudent = function(req,res){

 

        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server)=>{
            const db = server.db('api');



            let filter = {};

            const queries =  url.parse(req.url,true).query;


            if ( queries.id ) {
                filter._id = ObjectId(queries.id)
            }else{
                res.send({success : false, message:"ID param is required"}) 
            }


            db.collection('students').deleteOne( filter ).then((data)=>{ 

                res.send({success : true, message: "deleted successfully"}) 
                
                
            }).catch(
                (e)=>{
                    res.send({success : false, message:"Something went wrong."})  
            }) 
 
        }).catch((err)=>{
            res.send({success : false, message:"Err contacting db server."}) 
        })  

}
