const express=require("express")
const checkOutRouter=express.Router();
const{checkOut}=require("../controllers/checkOut");

checkOutRouter.post("/check",checkOut);
module.exports=checkOutRouter