const express = require('express')
const { createNewAccount, authUser, getUserInfo } = require('./modules/auth')
const app = express()
const port = 8080
const url = require('url');
var jwt = require('jsonwebtoken');

var cors = require('cors');
const { createNewClient, getClientsList, deleteClient, getClientById, editClient } = require('./modules/clients');
const { createNewVehicule, getClientsVehiculeListByID, addInterventionVehicule, getVehiculeHistoric } = require('./modules/vehicules');


app.use(cors())



app.use(function(req,res,next){
    const token = req.headers.authorization;


    const path = url.parse(req.url,true).pathname;

    switch (path) {
        case '/api/create-account':
                next();
            break;
        case '/api/auth':
                next();
            break;
            
    
        default:

            if (token != null) {
                    try {
                        var decoded = jwt.verify(token, 'parcauto2022');

                        next();
                  } catch(err) {
                    // err
                    res.send({ success:false, message:"session expired"})
                  }



            } else {
                res.send({ success:false, message:"a full auth is required"})
            }

            break;
    }

 

})


// clients api

app.post('/api/clients/add',(req,res)=>{
    createNewClient(req,res);
})


app.get('/api/clients/list',(req,res)=>{
    getClientsList(req,res);
})

app.get('/api/clients/find-by-id',(req,res)=>{
    getClientById(req,res);
})


app.post('/api/clients/edit',(req,res)=>{
    editClient(req,res);
})

app.post('/api/clients/vehicule/add/intervention',(req,res)=>{
    addInterventionVehicule(req,res);
})


app.get('/api/clients/vehicule/intervention/find-by-id',(req,res)=>{
    getVehiculeHistoric(req,res);
})




 

app.post('/api/clients/add/vehicule',(req,res)=>{
    createNewVehicule(req,res);
})


app.get('/api/clients/vehicules/list',(req,res)=>{
    getClientsVehiculeListByID(req,res);
})
 

app.delete('/api/clients/delete',(req,res)=>{
    deleteClient(req,res);
})



// user Apis

app.post('/api/create-account',(req,res)=>{
    createNewAccount(req,res);
})


app.post('/api/auth',(req,res)=>{
    authUser(req,res);
})


/**
 * app.get('/api/hello',(req,res)=>{
   res.send('hello')
})

 */

app.get('/api/user/info',(req,res)=>{
    getUserInfo(req,res);
 })
 


// end user Apis


app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})