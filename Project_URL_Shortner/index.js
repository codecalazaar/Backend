const express=require('express');
const urlRouter = require('./routes/url');
const URL = require('./models/url')
const {connecToMongoDB}=require('./connect');


const app=express();

const PORT=8001;


connecToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log("MongoDb connected!"))
.catch((err)=>console.log("mongo error : ",err));

app.use(express.json());

app.use('/url',urlRouter);

app.get('/:shortId',async(req,res)=>{
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