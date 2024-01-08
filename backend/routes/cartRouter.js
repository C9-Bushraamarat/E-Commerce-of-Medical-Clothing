const express = require("express");
const cartRouter = express.Router();
const  {createnewCart}  = require("../controllers/cartController");

cartRouter.post("/new", createnewCart);
module.exports = cartRouter;
