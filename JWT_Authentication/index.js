const express=require('express');
const cookieParser=require('cookie-parser');

const URL = require('./models/url')
const {connecToMongoDB}=require('./connection');

const urlRouter = require('./routes/url');
const staticRouter = require('./routes/staticRouter')
const userRoute=require('./routes/user');

//middleware:
const { restrictToLoggedinUserOnly, checkAuth }=require('./middleware/auth')


const path=require('path');


const app=express();

const PORT=5005;


connecToMongoDB('mongodb://127.0.0.1:27017/auth')
.then(()=>console.log("MongoDb connected!"))
.catch((err)=>console.log("mongo error : ",err));


//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

//setting the ejs template(server side rendering)
app.set('view engine', 'ejs');
//files that contain the ejs
app.set('views',path.resolve('./views'));

//route for rendering
app.get('/test',async(req,res)=>{
    const allUrls= await URL.find({});
    return res.render('home',{
        urls : allUrls,  //use in views file
    });
})

app.use('/',checkAuth,staticRouter);  //get('/') method for all shortids, and  get('/signup') for signup page
           //for each user to have seperate url history 
//--------------------------------------------------
app.use('/url',restrictToLoggedinUserOnly,urlRouter);  //post url to create shortid in database url model

//----------------------------------------------------------
app.use('/usr',userRoute);   //post method for signup to store the data in database usr model





app.get('/url/:shortId',async(req,res)=>{    //get method for all shorids
    const shortId=req.params.shortId;
   let entry=await URL.findOneAndUpdate({
         shortId
    },{
        $push:{
       visitHistory:{
          timestamp: Date.now(),
       },
    }
}
);
    res.redirect(entry.redirectURL);
});


app.listen(PORT,()=>{
    console.log(`Server Started listening to port ${PORT}`);
})