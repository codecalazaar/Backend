const express=require('express');
const path=require('path');
const multer  = require('multer');

const app=express();
const PORT=5001;

const storage = multer.diskStorage({
    destination: function (req, file, cb){  //cb-callback
            return cb(null,'./uploads');              //(if error,storage filename);
    },
    filename: function (req, file, cb){
            return cb(null,`${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

//middleware:
app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

//Routespp-
app.get('/',(req,res)=>{
     return res.render('homepage');
});

app.post('/upload',upload.single('avatar'),(req,res)=>{
      console.log(req.body);
      console.log(req.file);

      return res.redirect('/');  
});


app.listen(PORT,()=>console.log('Server is listening on Port : 5001'));