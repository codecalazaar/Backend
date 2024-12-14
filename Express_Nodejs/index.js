//Express is a Nodejs framework

//Cons
//1.lot of code
//2.lot of cases
//3.different methods for each case




// const http = require('http')
const express = require('express');
const app = express();
const port=8000;

// app.method(PATH,HANDLER)

app.get('/', (req,res)=>{
     return res.end("hello from Home page");
})

app.get('/about', (req,res)=>{
    return res.end(`hello `+ req.query.name);
})
app.listen({port},()=>{
     console.log("Server Started "+port);
});

// const myserver = http.createServer(app);
// myserver.listen(8000,()=>console.log("Server Started !"));