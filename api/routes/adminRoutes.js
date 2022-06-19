const express = require("express")
const admin = require("../controllers/admin")

const router = express.Router();

router.post("/register", admin.createAdmin);
router.post("/login", admin.loginAdmin);
router.post("/recrecla/sendemail", admin.emailClient);



module.exports = router;