const express = require("express");
const cartRouter = express.Router();
const  { createCart,getCart }  = require("../controllers/cartController");

//  cartRouter.post("/newcart",createCart);
cartRouter.get("/getCart",getCart)
module.exports = cartRouter;
