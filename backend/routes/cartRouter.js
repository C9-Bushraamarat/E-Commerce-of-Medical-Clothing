const express = require("express");
const cartRouter = express.Router();
const  { userCart,getCart }  = require("../controllers/cartController");
const authentication=require("../middleware/authentication")
  cartRouter.post("/newcart",authentication ,userCart);
cartRouter.get("/getCart",getCart)
module.exports = cartRouter;
