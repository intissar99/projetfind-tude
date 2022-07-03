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


exports.deleteComment = async function (req, res) {
    console.log(req.params.id);
    try {
       const Comment= await commentModel.findByIdAndDelete(req.params.id);

        res.send(200, Comment);
   } catch (error) {
       console.log(error);
       res.status(500).send(error);
   }
};

//update 
exports.updateComment = async function (req, res) {

   
       try {

           const updateComment= await commentModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })




           res.send(200, updateComment)
       }
       catch (error) {
           console.log(error)
           res.status(500).send(error)

       }

   }
