const express=require("express")
const product=require("../controllers/product")

const router = express.Router();

router.post("/createProduct", product.createproduct);
router.get("/fetchProducts",product.fetchProducts)





module.exports =router;