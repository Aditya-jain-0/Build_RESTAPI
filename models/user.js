const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :  {
        type : String,
        required : true
    },
    branch:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true,
        default : 1
    }
})

module.exports = mongoose.model('User',userSchema)