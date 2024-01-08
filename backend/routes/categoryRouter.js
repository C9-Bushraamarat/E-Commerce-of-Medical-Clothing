const express=require("express")
const categoryRouter=express.Router();
const{createNewCategory}=require("../controllers/categoryController");

categoryRouter.post("/new",createNewCategory);
module.exports=categoryRouter;