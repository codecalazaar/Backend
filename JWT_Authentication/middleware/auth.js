const { getUser } = require('../service/auth')

//used to check if the user is authenticated or not using the session id i.e cookie


async function restrictToLoggedinUserOnly(req,res,next){
      const UserUid = req.cookies?.uid;    //takes the cookies id

      if(!UserUid) return res.redirect('/login');  //if cookie id is not there not a valid user either (email or password incorrect) or (no user)

      const user=getUser(UserUid);
      if(!user) return res.redirect('/login');

      req.user= user;
      next();
}

async function checkAuth(req,res,next){    //to check if authenticated or not, not a forceful method and if not an user then it is null
    const UserUid = req.cookies?.uid;    //takes the cookies id
    const user=getUser(UserUid);

    req.user= user;
    next();
}

module.exports={
    restrictToLoggedinUserOnly,
    checkAuth
}