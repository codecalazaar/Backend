const User=require('../models/user');
const {v4:uuidv4}=require('uuid');

const {setUser}=require('../service/auth')
//for adding data into the database;

//1.for usr database(signup)---->new user (/usr/signup)
async function handleUserSignup(req,res){
      const{name,email,password}=req.body;
      await User.create({
          name,
          email,
          password,
      });
      return res.redirect('/');
};

//2.for usr database(login)---->old user (/usr/login)
async function handleUserLogin(req,res){
    const{ email,password }=req.body;
    const user=await User.findOne({email,password});
    if(!user) return res.render('login',{
        error: 'InVALID UserName or Password'
    })
    
    //if there is a user found in database we will give a sessionId
    //from uuid
    
    const token = setUser(user);
    res.cookie('token',token);  //uid is name of cookie


    return res.redirect('/');
}


module.exports={
    handleUserSignup,
    handleUserLogin,
}
