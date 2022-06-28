const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const answerSchema = new mongoose.Schema(
    {
        answer: String,
        user: String,
        reply: { type: Schema.Types.ObjectId, ref: "answer" }


    },
    {
        timestamps: true

    }
)
const answer = mongoose.model("answer", answerSchema)
module.exports = answer