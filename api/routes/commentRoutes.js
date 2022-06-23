const express = require("express")
const reclamation = require("../controllers/comment")
const router = express.Router();

router.post("/comment", reclamation.createComment);
router.post("/comment/reply/:id", reclamation.replyToComment);
router.get("/fetchComments", reclamation.fetchComments)
// router.delete("/deleteReclamation/:id", reclamation.deleteReclamation);

module.exports = router;