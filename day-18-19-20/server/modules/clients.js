const { ObjectId } = require('mongodb');
const url = require('url');

exports.createNewClient = function (req, res) {
    let request = [];

    req.on('data', (data) => {
        request.push(data);
    }).on('end', () => {

        let body = JSON.parse(Buffer.concat(request).toString());


        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server) => {
            const db = server.db('parcautobigeek');


            db.collection('clients').insertOne(body).then((resInsert) => {
                res.send({ success: true, message: "Client inserted successfully." })
            }).catch((err) => {
                res.send({ success: false, message: "Something went wrong" })
            })




        }).catch((error) => {
            console.log(error);
            res.send({ success: false, message: "Err db" })
        })

    })
}


exports.getClientsList = function (req, res) {
    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017').then((server) => {
        const db = server.db('parcautobigeek');


        db.collection('clients').find({}).toArray().then((clients) => {
            res.send({ success: true, clients: clients })
        }).catch((err) => {
            res.send({ success: false, message: "Something went wrong" })
        })




    }).catch((error) => {
        console.log(error);
        res.send({ success: false, message: "Err db" })
    })
}



exports.deleteClient = function (req, res) {

    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017').then((server) => {
        const db = server.db('parcautobigeek');


        const id = url.parse(req.url, true).query.id;

        if (id !== null) {
            db.collection('clients').deleteOne({ _id: ObjectId(id) }).then((deleteResponse) => {

                if (deleteResponse.deletedCount === 1) {
                    res.send({ success: true })
                } else {
                    res.send({ success: false, message: "could not found requested client." })
                }


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


exports.getClientById = function (req, res) {
    const MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://localhost:27017').then((server) => {
        const db = server.db('parcautobigeek');


        const id = url.parse(req.url, true).query.id;

        if (id !== null) {
            db.collection('clients').findOne({ _id: ObjectId(id) }).then((client) => {


                res.send({ success: true, data: client })



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



exports.editClient = function (req, res) {
    let request = [];

    req.on('data', (data) => {
        request.push(data);
    }).on('end', () => {

        let body = JSON.parse(Buffer.concat(request).toString());


        const MongoClient = require('mongodb').MongoClient;

        MongoClient.connect('mongodb://localhost:27017').then((server) => {
            const db = server.db('parcautobigeek');





            const id = url.parse(req.url, true).query.id;

            if (id !== null) {
                db.collection('clients').findOne({ _id: ObjectId(id) }).then((client) => {




                    db.collection('clients').updateOne(
                        { _id: ObjectId(id) }, { $set: body }
                    ).then((resInsert) => {
                        res.send({ success: true, message: "Client updated successfully." })
                    }).catch((err) => {
                        res.send({ success: false, message: "Something went wrong" })
                    })



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

    })
}