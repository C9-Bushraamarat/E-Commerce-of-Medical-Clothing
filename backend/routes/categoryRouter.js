const express=require("express")
const categoryRouter=express.Router();
const{createNewCategory}=require("../controllers/categoryController");

categoryRouter.post("/newcategory",createNewCategory);
module.exports=categoryRouter;