const express = require("express");
const productRouter = express.Router();
const { createNewProduct,getAllProducts,getProductById } = require("../controllers/productController");
productRouter.post("/newproduct", createNewProduct);
productRouter.get("/getproduct",getAllProducts );
productRouter.get("/getproduct/:id",getProductById );

module.exports = productRouter;
