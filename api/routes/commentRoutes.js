const express = require("express")
const comment = require("../controllers/comment")
const router = express.Router();

router.post("/comment", comment.createComment);
router.post("/comment/reply/:id", comment.replyToComment);
router.get("/fetchComments", comment.fetchComments)
router.delete("/deleteComment/:id", comment.deleteComment);
router.put("/updateComment/:id", comment.updateComment);

module.exports = router;