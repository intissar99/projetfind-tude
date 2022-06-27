const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const commentSchema = new mongoose.Schema(
    {
        comment: String,
        user: String

    },
    {
        timestamps: true

    }
)
const comment = mongoose.model("comment", commentSchema)
module.exports = comment