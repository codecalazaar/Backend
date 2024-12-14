const express=require('express');
const urlRouter = require('./routes/url');
const staticRouter = require('./routes/staticRouter')
const URL = require('./models/url')
const {connecToMongoDB}=require('./connect');

const path=require('path');


const app=express();

const PORT=8001;


connecToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log("MongoDb connected!"))
.catch((err)=>console.log("mongo error : ",err));


//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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

app.use('/',staticRouter);




app.use('/url',urlRouter);

app.get('/usr/:shortId',async(req,res)=>{
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
})
app.get('/analytics/:shortId',async(req,res)=>{
        const shortId=req.params.shortId;
        const result=await URL.findOne({shortId});
        return res.json({
            totalClicks:result.visitHistory.length,
            analytics : result.visitHistory,
              
         })

})


app.listen(PORT,()=>{
    console.log(`Server Started listening to port ${PORT}`);
})