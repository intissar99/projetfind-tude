const db= require("../models/user")
const bcrypt=require ("bcrypt")
//user signup
exports.createUser=async function(req,res){
    try{
        const salt=await bcrypt.genSalt(10)
        const hashedPass=await bcrypt.hash(req.body.password,salt)
        const user=await db.create({
            fullname :req.body.fullname,
            username: req.body.username ,
            email:req.body.email,
            password : hashedPass
        })
     res.status(201).send(user)
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)

    }

}
//user sign in
exports.loginUser=async function(req,res){
    try{
        const {username,password}=req.body
        const user = await db.find({username:username}).exec()
        console.log(user)
        if (!user) throw new Error("username non valid ")
        //const validpass=await bcrypt.compare(password,user.password)
        //if (!validpass) throw new Error("password non valid ")

        delete user.password
     res.status(201).send(user)
    }
    catch(error){
        console.log(error)
        res.status(403).send(error)

    }

}
//Fetsh all user
exports.fetchUsers=async function(req,res){
    try{
      
        const users = await db.find({}).exec()
        console.log(users)
       

      
     res.status(201).send(users)
    }
    catch(error){
        console.log(error)
        res.status(403).send(error)

    }

}
//delete user 
exports.deleteUsers=async function(req,res){
    const id= req.params.id;
    await db.findByIdAndRemove(id).exec();
    res.send("item deleted");
}
