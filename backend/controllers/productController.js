const productModel = require("../models/productSchema");
const createNewProduct = (req, res) => {
  const { image, name, description, color, price, size, category } = req.body;
  const newProduct = new productModel({
    image,
    name,
    description,
    color,
    price,
    size,
    category,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
      console.log(err);
    });
};
const getAllProducts = (req, res) => {
  productModel
    .find()
    .populate("category")
    .exec()
    .then((products) => {
      if (products.length) {
        res.status(200).json({
          success: true,
          message: "All the products",
          products: products,
        });
      } else {
        res.status(200).json({
          success: false,
          message: "No products yet",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
const getProductById = (req, res) => {
  let id = req.params.id;
  productModel
    .findById(id)
    .populate("category")
    .exec()
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          success: false,
          message: `The article with id => ${id} not found`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `The article ${id}`,
          product: product,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
const removeProductById = (req, res) => {
  const id = req.params.id;
  productModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The article with id => ${id} not found`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Product Deleted`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
const updateProductById = (req, res) => {
  const id = req.params.id;
  const filter = req.body;
  Object.keys(filter).forEach((key) => {
    filter[key].toString().replaceAll(" ", "") == "" && delete filter[key];
  });
  productModel
    .findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((newProduct) => {
      if (!newProduct) {
        return res.status(404).json({
          success: false,
          message: `The product with id => ${id} not found`,
        });
      } else {
        res.status(202).json({
          success: true,
          message: `Product Updated`,
          product: newProduct,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `ServerError`,
        err: err.message,
      });
    });
};
const getProductByCategoryId = (req, res) => {
  let id = req.params.id;
  productModel
    .find({ category: id })
    .then((result) => {
      console.log("All Products>>:", result);
      if (!result.length) {
        res.status(404).json({
          success: false,
          message: `The category with id => ${id} not found`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `All products of with the category ${id}`,
          products: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = {
  createNewProduct,
  getAllProducts,
  getProductById,
  removeProductById,
  updateProductById,
  getProductByCategoryId,
};
