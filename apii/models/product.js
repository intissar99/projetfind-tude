const mongoose = require("mongoose")

mongoose.Promise= global.Promise

const productSchema= new mongoose.Schema(
    {
       name:String,
       description:String,
       categorie:String,
       picture:String,
       //user:{type:Schema.Types.ObjectId,ref:"User"}

    },
    { 
        timestamps:true 

    }
)
const product=mongoose.model("products",productSchema)
 module.exports=product