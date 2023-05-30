const express = require('express');
const router = express.Router()
const User = require('../models/user')
//getting all
router.get('/',async(req,res)=>{
   try{
    const users = await User.find()
    res.send(users)
   }catch(err){
    res.status(500).json({message : err.message})
   }
})
//getting one
router.get('/:id',getUser,(req,res)=>{
    res.send(res.user)
})
//creating one
router.post('/',async(req,res)=>{
       user = new User({
        name : req.body.name,
        branch : req.body.branch,
    })
    try{
        const newUser = await User.collection.insertOne(user);
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message : err.message})
    }
})

// updating one
// if user provides name to be updated
router.patch('/:id',getUser,async(req,res)=>{
   if(req.body.name != null){
    res.user.name = req.body.name
   }
   if(req.body.branch != null){
    res.user.branch = req.body.branch
   }
   try{
    const updatedUser = await res.user.save()
    res.json(updatedUser)
   }catch(err){
    res.status(400).json({message : err.message})
   }
})

// delete one
router.delete('/:id',getUser,async(req,res)=>{
    try{
       await res.user.deleteOne()
       res.json({'message':"user removed"})
    }catch(err){
      res.status(500).json({message : err.message})
    }
})

async function getUser(req,res,next){
try{
    const user = await User.findById(req.params.id);
    if(user == null){
        return res.status(404).json({"message":"No user exists"})
    }
    res.user = user
}catch(err){
    return res.status(500).json({message:err.message})
} 
next()
}
module.exports = router