const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true,
    },
   
    
    
})

const Forot_Password = mongoose.model("Forot_Password", schema);
module.exports = Forot_Password;