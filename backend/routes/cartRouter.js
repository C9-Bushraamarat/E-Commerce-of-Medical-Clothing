const express = require("express");
const cartRouter = express.Router();
const  { newItemCart }  = require("../controllers/cartController");

cartRouter.post("/newcart/:userid",newItemCart);
module.exports = cartRouter;
