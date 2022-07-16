const http = require('http');
const url = require('url');
const { getYear } = require('./my-modules/dateModule');
const dateModule = require('./my-modules/dateModule');


const fs  = require('fs'); // file system
const { createLog } = require('./my-modules/log');


/*
http.createServer((req,res)=>{


    const requestURL = url.parse(req.url,true);


    console.log(requestURL);

    if (requestURL.pathname ==='/somme') {
        const x  = Number(requestURL.query.x);
        const y  = Number(requestURL.query.y);

        res.write(`la somme de ${x} et ${y}  = ${x+y}`);

        
    }else if (requestURL.pathname ==='/multi') {
        const x  = Number(requestURL.query.x);
        const y  = Number(requestURL.query.y);

        res.write(`la multi de ${x} et ${y}  = ${x*y}`);

    }else{
       
        const year = getYear();

        res.write(`Bienvenue chez somme et multi year : ${year}`);

    }
    
    res.end(); 
}).listen(8080);*/



/*
http.createServer((req,res)=>{
    console.log(req.headers);


    res.writeHead(200,{"content-type":'application/json'});

    res.write('{ "username":"chourabi taher" }')
    res.end();

}).listen(8080);
*/

/*
http.createServer((req,res)=>{


   const pathname = url.parse(req.url,true).pathname;

   switch (pathname) {
    case '/summer':
        fs.readFile('./templates/summer.html',(err,data)=>{
            res.write(data);
            res.end();
        })
        break;

    case '/winter':
        fs.readFile('./templates/winter.html',(err,data)=>{
            res.write(data);
            res.end();
        })
        break;
   
    default:
        fs.readFile('./templates/index.html',(err,data)=>{
            res.write(data);
            res.end();
        })
        break;
   }


}).listen(8080);*/


http.createServer((req,res)=>{


    createLog();



    res.end("ok")
        
}).listen(8080);