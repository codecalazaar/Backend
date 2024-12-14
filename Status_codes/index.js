//informational response: 100-199;
//successful response: 200-299;
//redirection response: 300-399;
//client error response:400-499;
//server-error response:500-599;

const express=require('express');
const app=express();


app.post('/',(req,res)=>{
   //after posting;
   return res.status(201).json({status:successful});
})