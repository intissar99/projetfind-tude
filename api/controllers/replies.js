const repliesModel = require("../models/replies");


exports.createReplies = async function (req, res) {
    try {
        const reply = await repliesModel.create({
            reply: req.body.reply,
            user: req.body.user,
            comment: req.body.comment
        });
        res.status(201).send(reply);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

//Fetsh Replies
exports.fetchReplies = async function (req, res) {
    try {
        console.log(req.body);
        const commentReplies = [];
        const replies = await repliesModel.find({}).exec();

        replies.map((reply) => {
            if ("" + reply.comment === req.body.commentId) {
                commentReplies.push(reply)
            }
        })
        res.status(201).send(commentReplies);

    } catch (error) {
        console.log(error);
        res.status(403).send(error);
    }
};

// exports.replyToComment = async function (req, res) {
//     console.log(req.body);
//     try {
//         console.log(req.params.id);
//         const comment = await commentModel.findById(req.params.id).exec();
//         comment.replies.push({ reply: req.body.reply, username: req.body.user })
//         res.status(201).send(comment);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };

exports.deleteReply = async function (req, res) {
     console.log(req.params.id);
     try {
        const Reply= await repliesModel.findByIdAndDelete(req.params.id);

         res.send(200, Reply);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
 };

//update user
exports.updateReply = async function (req, res) {

    
        try {

            const updateReply= await repliesModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })




            res.send(200, updateReply)
        }
        catch (error) {
            console.log(error)
            res.status(500).send(error)

        }

    }



