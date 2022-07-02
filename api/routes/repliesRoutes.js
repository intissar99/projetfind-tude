const express = require("express")
const replies = require("../controllers/replies")
const router = express.Router();

router.post("/replies", replies.createReplies);
router.post("/fetchReplies", replies.fetchReplies)
// router.delete("/deleteReclamation/:id", reclamation.deleteReclamation);

module.exports = router;