const express = require("express")
const answer = require("../controllers/answer")
const router = express.Router();

router.post("/answer", answer.createAnswers);
router.post("/fetchanswer", answer.fetchAnswers)

module.exports = router;