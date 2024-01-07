const express=require("express")
const roleRouter=express.Router();
const{createNewRole}=require("../controllers/roleController")

roleRouter.post("/newrole",createNewRole)
roleRouter.post("/test",(req,res)=>{
    console.log("RoleRouter is working")
})
module.exports=roleRouter;