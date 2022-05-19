const mongoose = require("mongoose")
mongoose.Promise= global.Promise
const adminSchema= new mongoose.Schema(
    {
       username: String ,
       password : String,
       verif: String 
    },
    { 
        timestamps:true 

    }
)
const admin=mongoose.model("admins",adminSchema)
 module.exports= admin