const User = require('../models/user');



async function handleUpdateNewUser(req,res){
    const body=req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender ){
       return res.status(400).json({msg:"All fileds are required!"})
    }
   const result =await User.create({
       firstName: body.first_name,
       lastName: body.last_name,
       email: body.email,
       gender: body.gender,
       jobTitle: body.job_title,
    });
   console.log(result);
    return res.status(201).json({status:"success!"});
}


async function handleGetAllUsersasync(req,res){
    const allDbUsers= await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req,res){
        const user=await User.findById(req.params.id);
        if(!user){
          return res.status(404).json({Error:"users not found!"});
        }
        return res.json(user);
}

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, {lastName: 'chapter'});
    return res.json({status:"successfully updated!"});
}
async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status:"succesfully deleted!"})
}

module.exports={
    handleGetAllUsersasync,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleUpdateNewUser
}
