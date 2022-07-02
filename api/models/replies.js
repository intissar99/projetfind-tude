const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const repliesSchema = new mongoose.Schema(
    {
        reply: String,
        user: String,
        comment: { type: Schema.Types.ObjectId, ref: "comment" }


    },
    {
        timestamps: true

    }
)
const replies = mongoose.model("replies", repliesSchema)
module.exports = replies