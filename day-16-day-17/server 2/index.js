const express = require('express')
const app = express()
const port = 8080;
var jwt = require('jsonwebtoken');
var url = require('url');

app.use(function(req,res,next){
    console.log(new Date());


    const auth = req.headers.authorization;

    const path = url.parse(req.url,true).pathname;


    if ( path ==='/get-key' ) {
        next();
    }else{
        if (auth != null) {

            try {
                jwt.verify(auth, 'secret-key', function(err, decoded) {
                   if ( decoded!= null) {
                        console.log(decoded);
                        next();
                        
                   } else {
                        res.send({ success :false, message:'session expired'})
                   }
                });
      
            } catch (error) {
                res.send({ success :false, message:'session expired'})
            }
             
        }else{
            res.send({ success :false, message:'auth is required'})
        }
    }

    

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/get-key', (req, res) => {

    var token = jwt.sign(
        { user:'test',  exp: Math.floor(Date.now() / 1000) + (20), },
         'secret-key');


    res.send( { success:true, token:token } )
})

  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})