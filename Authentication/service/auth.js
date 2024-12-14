const sessionIdtoUserMap=new Map();

function setUser(id,user){
       sessionIdtoUserMap.set(id,user);  //set the sessionId and user from the controller fn
};

function getUser(id){
      return sessionIdtoUserMap.get(id);  //gets the sessionId of the user;
}

module.exports = {
    setUser,
    getUser,
}