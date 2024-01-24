const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
   
      quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1,
      },
      
    },
  ],
  // total: {
  //   type: Number,
  //   required:true,
  //   default: 0,
  // },
});
module.exports = mongoose.model("Cart", cartSchema);

