// middleware -- process the request and forward it to the function
// excutes for both response and request
// can have multiple middlewares
// make changes to request and response object

//Middleware: at top
//   app.use((req,res,next)=>{
//          console.log();
//          next();
//    })


//Examples:(api)

    const express=require('express');
    const fs=require('fs');

    const app=express();
    const port=8000;

//middleware;
  app.use(express.urlencoded({})); //to parse the body for post method

  app.use((req,res,next)=>{
       // req.username='dkujks';      //accessable to other middleware
       console.log('Time',Date.now());
       fs.appendFile('log.txt',`\n${Date.now()} : ${req.method} : {req.path}\n :${req.ip}`, (err,data)=>{
            next();
       })
  })


//api
  
 //1.get;

 app.get('/',(req,res)=>{
      return res.end('successful');
 })











 app.listen({port},()=>{console.log("server started!")})