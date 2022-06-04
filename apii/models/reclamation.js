const mongoose = require("mongoose")
const Schema=mongoose.Schema
mongoose.Promise= global.Promise

const reclamationSchema= new mongoose.Schema(
    {
       
      
       subject:String,
       message:String,
       
       user:{type:Schema.Types.ObjectId,ref:"User"},
       product:{type:Schema.Types.ObjectId,ref:"Product"}

    },
    { 
        timestamps:true 

    }
)
const reclamation=mongoose.model("reclamation",reclamationSchema)
 module.exports=reclamation