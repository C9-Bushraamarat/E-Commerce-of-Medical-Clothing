const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "User" 
  },
  image: { type: String },
  name: { type: String, unique: true },
  description: { type: String },
  color: [{ type: String }],
  price: { type: Number },
  size: [{ type: String }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
module.exports = mongoose.model("Product", productSchema);
