const rec = require("../models/reclamation");
exports.createReclamation = async function (req, res) {
    try {
        const reclamation = await rec.create({
            subject: req.body.subject,
            message: req.body.message,
            useremail: req.body.email,
            product: req.body.productId,
        });
        res.status(201).send(reclamation);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
//Fetsh Reclamations
exports.fetchReclamation = async function (req, res) {
    try {

        const reclamations = await rec.find({}).exec();
        res.status(201).send(reclamations);

    } catch (error) {
        console.log(error);
        res.status(403).send(error);
    }
};
exports.deleteReclamation = async function (req, res) {
    console.log(req.params.id);
    try {
        const reclamations = await rec.findByIdAndDelete(req.params.id);

        res.send(200, reclamations);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
