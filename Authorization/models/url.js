const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
           shortId:{
              type: String,
              required:true,
              unique:true,
           },
           redirectURL:{
            type:String,
            required:true,
          },
          visitHistory:[{timestamp : {type : Number}}],
          createdBy:{
             type:mongoose.Schema.Types.ObjectId, //used for the userid for a particular url created
             ref: 'users', //refer to user
          }
        },{timestamps:true});

const URL = mongoose.model('url',userSchema);
module.exports = URL;