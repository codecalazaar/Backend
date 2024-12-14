const express=require('express');
const {handleGetAllUsersasync,handlegetUserById,handleUpdateUserById,handleDeleteUserById,handleUpdateNewUser}=require('../controller/user');
const router=express.Router();


//get
router.route('/')
.get(handleGetAllUsersasync)
.post(handleUpdateNewUser)

router.route('/:id')
.get(handlegetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

module.exports=router;

