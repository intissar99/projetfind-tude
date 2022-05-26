const product= require("../models/product")


exports.createproduct=async function(req,res){
    
    try{
        const Product=await product.create({
            name :req.body.name,
            price: req.body.price ,
            categorie :req.body.categorie,
            
        })
     res.status(201).send(Product)
      
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)

    }

}
//Fetsh products
exports.fetchProducts=async function(req,res){
    try{
      
        const products= await product.find({}).exec()
        console.log(products)
       

      
     res.status(201).send(products)
    }
    catch(error){
        console.log(error)
        res.status(403).send(error)

    }

}
//delete product 
exports.deleteProducts=async function(req,res){
    console.log(req.params.id)
    try{
      
        const product= await product.findByIdAndDelete(req.params.id)
        
       

      
     res.send(200,product)
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)

    }
}