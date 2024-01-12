const cartModel = require("../models/cartSchema");
const userModel = require("../models/userSchema");
const productModel=require("../models/productSchema")
const newItemCart = (req, res) => {
  const id = req.params.id;
  const { quantity ,productId,
    total } = req.body;
  const newItem = new cartModel({
  productId,
  quantity ,
  total
  });
  newItem
    .save()
    .then((result) => {
      userModel
        .findByIdAndUpdate(
          id  ,
          { $push: { cart: result.id } },
          { new: true }
        )
        .then(() => {
          res.status(201).json({
            success: true,
            message: `Item added`,
            Item: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = { newItemCart };
