const mongoose = require("mongoose")
mongoose.Promise= global.Promise

const reclamationSchema= new mongoose.Schema(
    {
       fullname:String,
       message:String,
       subject:String,
       
       user:{type:Schema.Types.ObjectId,ref:"User"},
       product:{type:Schema.Types.ObjectId,ref:"Product"}

    },
    { 
        timestamps:true 

    }
)
const reclamation=mongoose.model("reclamation",reclamationSchema)
 module.exports=reclamation