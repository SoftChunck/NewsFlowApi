const mongoose = require("mongoose");

const schema = mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    // checkOTP:{
    //     type:Boolean,
    //     required:true
    // },
    
    
})

const User_Registration_Form = mongoose.model("User_Registration_Form", schema);
module.exports = User_Registration_Form;