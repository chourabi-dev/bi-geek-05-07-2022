const fs = require('fs');

exports.createLog = function(){

    fs.appendFile(
        './log.txt',
        'new request date: '+new Date().toISOString()+'\n',
        (err)=>{ console.log("log inserted");
    })
}