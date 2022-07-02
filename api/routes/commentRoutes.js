const express = require("express")
const comment = require("../controllers/comment")
const router = express.Router();

router.post("/comment", comment.createComment);
router.post("/comment/reply/:id", comment.replyToComment);
router.get("/fetchComments", comment.fetchComments)
// router.delete("/deleteReclamation/:id", reclamation.deleteReclamation);

module.exports = router;