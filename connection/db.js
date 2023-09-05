// create db connection 
const mongoose = require("mongoose");
const {mongo_url} = require("../config")

const dbConnection = () => {
    try{
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database connected successfully");
    }catch(e){
        console.error("error while connect db");
    }
}

module.exports = dbConnection;