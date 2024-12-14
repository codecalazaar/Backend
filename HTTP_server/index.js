const http = require('http');
const fs = require('fs');

//creating server using http obj created above

//handler function to process incoming req

const Myserver = http.createServer((req,res)=>{
      console.log('req recieved');
      console.log(req.headers) //info regarding the client
      if(req.url === '/favicon.ico'){
         return res.end();
      }
      const log = `${new Date()}: ${req.url}: new request recieved\n`;
      fs.appendFile('log.txt',log,(err,response)=>{
         switch (req.url){
             case "/" :
                res.end("hello root page");
                break;
             case "/about":
                res.end("Hello from about page");
                break;
             default:
                res.end("Not found 404");
                break;
         }

      });
});

Myserver.listen(8000, ()=>{
    console.log("server started!");
});


// URL -Uniform Resource Locator
// ex: https://www.piyushgarg.dev/
// protocol+domain+(path)+?+(queryParameters);
// 

