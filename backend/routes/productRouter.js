const express = require("express");
const productRouter = express.Router();
const {
  createNewProduct,
  getAllProducts,
  getProductById,
  removeProductById,
  updateProductById,
  getProductByCategoryId
} = require("../controllers/productController");
productRouter.post("/newproduct", createNewProduct);
productRouter.get("/getproduct", getAllProducts);
productRouter.get("/getproduct/:id", getProductById);
productRouter.get("/getproduct/category/:id", getProductByCategoryId);

productRouter.delete("/deleteproduct/:id", removeProductById);
productRouter.put("/updateproduct/:id", updateProductById);

module.exports = productRouter;


/* <p>{e.price} JOD</p> */
