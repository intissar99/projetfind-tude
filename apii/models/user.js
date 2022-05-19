const mongoose = require("mongoose")
mongoose.Promise= global.Promise

const userSchema= new mongoose.Schema(
    {
       fullname :String,
       username: String ,
       email:String,
       password : String 
    },
    { 
        timestamps:true 

    }
)
const user=mongoose.model("users",userSchema)
 module.exports=user