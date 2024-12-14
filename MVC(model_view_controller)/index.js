const express=require('express');

//for connecting the database
const {connectMongoDb}= require('./connection');

//for connecting the middleware
const {logReqRes}=require('./middlewares');  //a part of the middlewares is used

//for connecting the routes
const useRouter=require('./routes/user');   //all the functions are used in the routes 

const app=express();
const PORT=5001;

//DATABASE

//connection
  
connectMongoDb('mongodb://127.0.0.1:27017/testdb1')
.then(()=>console.log('mongodb connected'))

//schema
//model


//middleware;

app.use(express.urlencoded({extended:false}));
app.use(logReqRes('log.txt'));

//routes:

app.use('/api/users',useRouter)

app.listen(PORT,()=>{
     console.log("server started!");
})