
const express=require("express");
const fs=require('fs');
const users = require('./MOCK_DATA.json');
const { stringify } = require("querystring");

const app=express();

const PORT=8000;

//HTML document for browser purpose
app.get('/users',(req,res)=>{
    
    //  <ul>
    //     <li>piyush</li>
    //  </ul>

    const html = 
    `
      <ul>
          ${users.map((user) => `<li>${user.first_name}</li>`).join("")};
      <ul/>   
    `
      res.send(html);
});


//Rest api;
app.get('/api/users',(req,res)=>{
    return res.json(users);  //json not send
});

app.get('/api/users/:id',(req,res)=>{
      const id=Number(req.params.id);
      const user=users.find(user => user.id === id);
      return res.json(user);
});



//MIDDLEWARE - Plugin
 app.use(express.urlencoded({extended : false}));  //for post method
//post

app.post('/api/users',(req,res)=>{
     const body = req.body;   //content sent
     console.log('Body',body) 
    //  users.push({...body,id: users.length});
    //  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    //     return res.json({status : "success", id: users.length});  
    //  })
    return res.json({status : "success", id: users.length});
     
});

//patch
app.patch('/api/users/:id',(req,res)=>{
    return res.json({status : "pending"});
});

//delete
app.delete('/api/users/:id',(req,res)=>{
    return res.json({status : "pending"});
});


//for the same path, all methods in one go:

// app.route("/users/:id")
// .get((req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find(user => user.id === id);
//     return res.json(user);
// })
// .post((req,res)=>{
//     return res.json({status : "pending"});
// })
// .patch((req,res)=>{
//     return res.json({status : "pending"});
// })
// .delete((req,res)=>{
//     return res.json({status : "pending"});
// })

app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
})