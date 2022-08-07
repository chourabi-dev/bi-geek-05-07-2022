const url = require('url');

exports.createNewVehicule = function (req, res) {
    let request = [];

    req.on('data', (data) => {
        request.push(data);
    }).on('end', () => {

        let body = JSON.parse(Buffer.concat(request).toString());


        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server) => {
            const db = server.db('parcautobigeek');

                                                // { mark: model... }
            db.collection('vehicules').insertOne(body).then((resInsert) => {
                res.send({ success: true, message: "Vehicule inserted successfully." })
            }).catch((err) => {
                res.send({ success: false, message: "Something went wrong" })
            })




        }).catch((error) => {
            console.log(error);
            res.send({ success: false, message: "Err db" })
        })

    })
}


exports.getClientsVehiculeListByID = function(req,res){
    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017').then((server) => {
        const db = server.db('parcautobigeek');


        const id = url.parse(req.url, true).query.id;

        if (id !== null) {
            db.collection('vehicules').find({ clientID: id  }).toArray().then((vehicules) => {


                res.send({ success: true, vehicules: vehicules })



            }).catch((err) => {
                res.send({ success: false, message: "Something went wrong" })
            })
        } else {
            res.send({ success: false, message: "bad request" })
        }

 

    }).catch((error) => {
        console.log(error);
        res.send({ success: false, message: "Err db" })
    })
}



exports.addInterventionVehicule = function (req,res){
    let request = [];

    req.on('data', (data) => {
        request.push(data);
    }).on('end', () => {

        let body = JSON.parse(Buffer.concat(request).toString());


        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server) => {
            const db = server.db('parcautobigeek');

                                                 
            db.collection('interventions').insertOne(body).then((resInsert) => {
                res.send({ success: true, message: "Intervention inserted successfully." })
            }).catch((err) => {
                res.send({ success: false, message: "Something went wrong" })
            })

        }).catch((error) => {
            console.log(error);
            res.send({ success: false, message: "Err db" })
        })

    })
}


exports.getVehiculeHistoric = function(req,res){
    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017').then((server) => {
        const db = server.db('parcautobigeek');


        const id = url.parse(req.url, true).query.id;

        if (id !== null) {
            db.collection('interventions').find({ idVehicule: id  }).toArray().then((interventions) => {


                res.send({ success: true, interventions: interventions })



            }).catch((err) => {
                res.send({ success: false, message: "Something went wrong" })
            })
        } else {
            res.send({ success: false, message: "bad request" })
        }

 

    }).catch((error) => {
        console.log(error);
        res.send({ success: false, message: "Err db" })
    })
}