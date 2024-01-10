const express=require("express")
const categoryRouter=express.Router();
const{createNewCategory,getAllCategory}=require("../controllers/categoryController");

categoryRouter.post("/newcategory",createNewCategory);
categoryRouter.get("/getcategory",getAllCategory);

module.exports=categoryRouter;