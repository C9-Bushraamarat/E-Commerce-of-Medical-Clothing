const express=require("express")
const userRouter=express.Router();
const{Register}=require("../controllers/userController")

userRouter.post("/register",Register)
module.exports=userRouter;