const express=require("express")
const user=require("../controllers/user")

const router = express.Router();

router.post("/user/register", user.createUser);
router.post("/user/login", user.loginUser);
router.get("/fetchUsers",user.fetchUsers);
router.delete("/deleteUsers/:id",user.deleteUsers);
router.put("/updateUser/:id",user.updateUser);
router.get("/fetchUserOfRec",user.fetchUserOfRec);


module.exports =router;