const express=require("express")
const productRouter=express.Router();
const{createNewProduct}=require("../controllers/productController")

productRouter.post("/newproduct",createNewProduct);
module.exports=productRouter;