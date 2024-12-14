const jwt = require('jsonwebtoken');
const secretcode='Rajkumar@@$';

function setUser(user){

       return jwt.sign({
           _id:user._id,
           email:user.email,
       },secretcode);  //set the sessionId and user from the controller fn
};

function getUser(token){
      if(!token) return null;
      try {
        return jwt.verify(token,secretcode); 
      } catch (error) {
        return null;
      }
     //gets the sessionId of the user;
}

module.exports = {
    setUser,
    getUser,
}