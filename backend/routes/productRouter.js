const express = require("express");
const productRouter = express.Router();
const { createNewProduct,getAllProducts } = require("../controllers/productController");
productRouter.post("/newproduct", createNewProduct);
productRouter.post("/getproduct",getAllProducts );

module.exports = productRouter;
