const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [],
  bill: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("Cart", cartSchema);
