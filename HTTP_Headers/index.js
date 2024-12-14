//Headers are part of req and res
//request headers
//response headers
//x--  represents the custom header
//the response or request headers are used to understand the type of data and about data;
//


//custom setting of headers:

const express=require('express');

const app=express();

app.get('/',(req,res)=>{

    res.setHeader('x-myName','vinesh'); //custom header
    //console.log(req.headers) //to read headers
    return res.end("succesful");
})