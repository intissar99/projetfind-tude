const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const commentaireSchema = new mongoose.Schema(
    {
        commentaire: String,
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        user: { type: Schema.Types.ObjectId, ref: "Product" }


    },
    {
        timestamps: true

    }
)
const commentaire = mongoose.model("commentaires", commentaireSchema)
module.exports = commentaire