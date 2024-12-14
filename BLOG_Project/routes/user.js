const {Router}=require('express');
const User=require('../models/user')
const router=Router();

router.get('/signin',(req,res)=>{
     return res.render('signin');
});

router.get('/signup',(req,res)=>{
    return res.render('signup');
});

router.post('/signin',async(req,res)=>{
      //check data from database if it matches or not
      const {email,password}=req.body;
      const user=await User.matchPassword(email,password);

      console.log('User',user);
      return res.redirect('/');
      

})

router.post('/signup',async(req,res)=>{
     //put the data into the database.
       const {fullName,email,password}=req.body;
       await User.create({
        fullName,
        email,
        password,

       });
       return res.render('home');
})

module.exports=router;