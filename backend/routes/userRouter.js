const express=require("express")
const userRouter=express.Router();
const{createNewUser}=require("../controllers/userController")

userRouter.post("/newuser",createNewUser)
module.exports=userRouter;