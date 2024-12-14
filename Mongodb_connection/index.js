const express=require('express');
const mongoose=require('mongoose');
// const fs=require('fs');

const app=express();
const PORT=5000;

//middleware
app.use(express.urlencoded({extended : false}));

//CONNECTION: return a promise


mongoose.connect('mongodb://127.0.0.1:27017/testdb1')
.then(()=>console.log('mongodb connected'))
.catch((err)=>console.log("Mongo error", err));

// //SCHEMA:

const userSchema=new mongoose.Schema({
     firstName:{
        type:String,
        required:true,
     },
     lastName:{
        type:String,
        
     },
     email:{
        type:String,
        required:true,
        unique:true,
     },
     jobTitle:{
        type:String,
        
     },
     gender:{
        type:String,
     },
    
},{timestamps: true})

// //Model or Collection: (can make many models)

  const User=mongoose.model('user',userSchema);


//Routes:

app.get('/',(req,res)=>{
     return res.end("successful");
});
app.get('/users',async(req,res)=>{
    
    const allDbUsers=await User.find({});
    
    return res.end(allDbUsers);
    
});

// app.post('/api/users',(req,res)=>{
//     const body = req.body;   //content sent
//     console.log('Body',body) 
   
//    return res.json({status : "success"});
    
// });

app.post('/api/users',async(req,res)=>{
     const body=req.body;
     if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender ){
        return res.status(400).json({msg:"All fileds are required!"})
     }
    const result =await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
     });
    console.log(result);
     return res.status(201).json({status:"success!"});
});

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
});