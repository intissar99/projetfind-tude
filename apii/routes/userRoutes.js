const express=require("express")
const user=require("../controllers/user")

const router = express.Router();

router.post("/user/register", user.createUser);
router.post("/user/login", user.loginUser);
router.get("/fetchUsers",user.fetchUsers)




module.exports =router;