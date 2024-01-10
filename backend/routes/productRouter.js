const express = require("express");
const productRouter = express.Router();
const { createNewProduct,getAllProducts,getProductById,removeProductById } = require("../controllers/productController");
productRouter.post("/newproduct", createNewProduct);
productRouter.get("/getproduct",getAllProducts );
productRouter.get("/getproduct/:id",getProductById );
productRouter.delete("/deleteproduct/:id",removeProductById );

module.exports = productRouter;
