const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const commentSchema = new mongoose.Schema(
    {
        comment: String,
        replies: Array,
        user: String



    },
    {
        timestamps: true

    }
)
const comment = mongoose.model("comments", commentSchema)
module.exports = comment