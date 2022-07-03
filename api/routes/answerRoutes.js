const express = require("express")
const answer = require("../controllers/answer")
const router = express.Router();

router.post("/answer", answer.createAnswers);
router.post("/fetchanswer", answer.fetchAnswers);
router.delete("/deleteAnswer/:id", answer.deleteAnswer);
router.put("/updateAnswer/:id", answer.updateAnswer);

module.exports = router;