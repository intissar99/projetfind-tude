const answersModel = require("../models/answer");

exports.createAnswers = async function (req, res) {
    try {
        const answer = await answersModel.create({
            answer: req.body.answer,
            user: req.body.user,
            reply: req.body.replyId
        });
        res.status(201).send(answer);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//Fetsh answers
exports.fetchAnswers = async function (req, res) {
    try {
        console.log(req.body);
        const replyanswers = [];
        const answers = await answersModel.find({}).exec();

        answers.map((answer) => {
            if ("" + answer.reply === req.body.replyId) {
                replyanswers.push(answer)
            }
        })
        res.status(201).send(replyanswers);

    } catch (error) {
        console.log(error);
        res.status(403).send(error);
    }
};
