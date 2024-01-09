const express=require("express")
const productRouter=express.Router();
const{createNewProduct}=require("../controllers/productController")
// const authentication=requir("../")
productRouter.post("/newproduct",createNewProduct);
module.exports=productRouter;