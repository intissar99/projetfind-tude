const commentModel = require("../models/comment");

exports.createComment = async function (req, res) {
    try {
        const comment = await commentModel.create({
            comment: req.body.comment,
            user: req.body.user,
        });
        res.status(201).send(comment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//Fetsh comment
exports.fetchComments = async function (req, res) {
    try {

        const comments = await commentModel.find({}).exec();
        res.status(201).send(comments);

    } catch (error) {
        console.log(error);
        res.status(403).send(error);
    }
};

exports.replyToComment = async function (req, res) {
    console.log(req.body);
    try {
        console.log(req.params.id);
        const comment = await commentModel.findById(req.params.id).exec();
        comment.replies.push({ reply: req.body.reply, username: req.body.user })
        res.status(201).send(comment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

// exports.deleteReclamation = async function (req, res) {
//     console.log(req.params.id);
//     try {
//         const reclamations = await commentModel.findByIdAndDelete(req.params.id);

//         res.send(200, reclamations);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };
