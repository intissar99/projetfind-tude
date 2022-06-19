const db = require("../models/admin")
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer");
const dotenv = require('../.env')
require('dotenv').config()

//user signup
exports.createAdmin = async function (req, res) {
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const admin = await db.create({

            username: req.body.username,
            password: hashedPass,
            verif: req.body.verif
        })
        res.status(201).send(admin)
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)

    }

}
//user sign in
exports.loginAdmin = async function (req, res) {
    try {
        const { username, password } = req.body
        const admin = await db.find({ username: username }).exec()
        console.log("log", admin)
        if (!admin) throw new Error("username non valid")
        //const validpass=await bcrypt.compare(password,user.password)
        //if (!validpass) throw new Error("password non valid ")

        delete admin.password

        res.status(201).send(admin)
    }
    catch (error) {
        console.log(error)
        res.status(403).send(error)

    }

}
//ADMIN SEND EMAIL TO CLIENT
exports.emailClient = async function (req, res) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    var mailOptions = {
        from: process.env.EMAIL_USER,
        to: req.body.email,
        subject: "Sending Email using Node.js",
        text: req.body.message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};