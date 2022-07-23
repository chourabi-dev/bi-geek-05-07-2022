const http = require('http');
/*

http.createServer((req,res)=>{


    let request = [];

                  // 0 1
    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{
        console.log(request);
        const body = JSON.parse(Buffer.concat(request).toString());

        console.log(body);
    })


    res.end();


}).listen(8080);*/


/**
 const express = require('express')
const app = express()
const port = 8080


// somme 
app.post('/api-somme', (req, res) => {

    let request = [];
    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{
        console.log(request);
        const body = JSON.parse(Buffer.concat(request).toString());

        res.send({ succes:true, result: (body.x + body.y) })
        
    })
})



app.post('/api-multi', (req, res) => {

    let request = [];
    req.on('data',(data)=>{
        request.push(data);
    }).on('end',()=>{
        console.log(request);
        const body = JSON.parse(Buffer.concat(request).toString());

        res.send({ succes:true, result: (body.x * body.y) })
        
    })
})*/


/*

app.post('/add-employee', (req, res) => {
    // ...
    res.send({success:true})
  })
  


app.get('/employees', (req, res) => {
    res.send([
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        { username:"chourabi", id:5 },
        
    ])
  })
  */
  






/************************************************************************************************************************************ */  
const express = require('express');
const { createNewStudent, getStudentsList, updateStudents, updateOneStudent } = require('./modules/students');
const app = express()
const port = 8080


// INSERT
app.post('/api-add-student', (req, res) => {
    createNewStudent(req,res);
})

// LIST + Filter
app.get('/api-list-student',(req,res)=>{
    getStudentsList(req,res);
})


// update many
app.post('/update-students',(req,res)=>{
    updateStudents(req,res);
})


app.post('/update-student',(req,res)=>{
    updateOneStudent(req,res);
})




 




app.listen(port, () => {
  console.log(`Tuto express listening on port ${port}`)
})