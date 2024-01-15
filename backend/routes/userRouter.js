const express=require("express")
const userRouter=express.Router();
// const  { createNewCart }  = require("../controllers/cartController");

const{Register,Login}=require("../controllers/userController")

userRouter.post("/register",Register);
userRouter.post("/login",Login);

module.exports=userRouter;