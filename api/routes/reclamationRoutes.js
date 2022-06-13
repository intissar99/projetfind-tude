const express=require("express")
const reclamation=require("../controllers/reclamation")
const router = express.Router();

router.post("/reclamation", reclamation.createReclamation);
router.get("/fetchReclamation",reclamation.fetchReclamation)
router.delete("/deleteReclamation/:id",reclamation.deleteReclamation);

module.exports =router;