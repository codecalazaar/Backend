const express=require('express');
const { handleUserSignup,handleUserLogin }=require('../controller/user');

const router=express.Router();

//('/usr');


//signup
router.post('/',handleUserSignup);   //(/usr/)

//login
router.post('/login',handleUserLogin);  //(/usr/login)

module.exports=router;