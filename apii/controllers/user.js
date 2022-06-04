const db = require("../models/user")
const bcrypt = require("bcrypt")
//user signup
exports.createUser = async function (req, res) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const user = await db.create({
            fullname: req.body.fullname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        res.status(201).send(user)
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)

    }

}
//user sign in
exports.loginUser = async function (req, res) {
    try {
        const { username, password } = req.body
        const user = await db.find({ username: username }).exec()
        console.log(user)
        if (!user) throw new Error("username non valid ")
        //const validpass=await bcrypt.compare(password,user.password)
        //if (!validpass) throw new Error("password non valid ")

        delete user.password
        res.status(201).send(user)
    }
    catch (error) {
        console.log(error)
        res.status(403).send(error)

    }

}
//Fetsh all user
exports.fetchUsers = async function (req, res) {
    try {

        const users = await db.find({}).exec()
        console.log(users)



        res.status(201).send(users)
    }
    catch (error) {
        console.log(error)
        res.status(403).send(error)

    }


}

exports.fetchUserOfRec = async function (req, res) {
    const ids = req.body.ids
    try {
        const UsersOfRec = []
        const users = await db.find({}).exec()
        console.log("users", users)
        {
            users.map((user, i) => {

                console.log(user.id);
                console.log(ids);
                if (ids[i] === user.id) {
                    UsersOfRec.push(user)
                }
            })
        }
        console.log("usersOfrec", UsersOfRec)
        console.log("ids", ids);
        res.status(201).send(UsersOfRec)
    }
    catch (error) {
        console.log(error)
        res.status(403).send(error)

    }

}
//delete user 
exports.deleteUsers = async function (req, res) {
    console.log(req.params.id)
    try {

        const user = await db.findByIdAndDelete(req.params.id)




        res.send(200, user)
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)

    }
}
//update user
exports.updateUser = async function (req, res) {

    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password)
        } try {

            const updateduser = await db.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })




            res.send(200, updateduser)
        }
        catch (error) {
            console.log(error)
            res.status(500).send(error)

        }

    } else {
        res.status(401).send("you can update only your account ")
    }


}

