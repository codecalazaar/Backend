const { getUser } = require('../service/auth')

//authentication

function checkforAunthentication(req,res,next){
       const tokencookie=req.cookies?.token;

       req.user=null;
       if(!tokencookie) return next();

       const token=tokencookie;
       const user=getUser(token);

       req.user=user;
       return next();
}

//for authorization
  //roles-admin,normal;
  function restrictTo(roles = []) {
    return function (req, res, next) {
        console.log('req.user:', req.user);
        console.log('roles:', roles);
        if (!req.user) {
            return res.render('login');
        }
        if (!roles.includes(req.user.role)) {
            return res.end('Sorry! You have no Access');
        }
        return next();
    };
}

module.exports={
    checkforAunthentication,
    restrictTo,
}