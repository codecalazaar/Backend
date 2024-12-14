const express=require('express');
const path=require('path');
const UserRoute=require('./routes/user');
const mongoose=require('mongoose');

const app=express();
const PORT=8001;

//database;
mongoose.connect('mongodb://localhost:27017/blogify')
.then((e)=>console.log('mongodb connected'))

//ejs-server rendering
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

//middleware
app.use(express.urlencoded({extended:false})); //to handle form data



//routes:
app.get('/',(req,res)=>{
      res.render('home');
})

app.use('/user',UserRoute);


app.listen(PORT,()=>console.log(`Server Started at port ${PORT}`));