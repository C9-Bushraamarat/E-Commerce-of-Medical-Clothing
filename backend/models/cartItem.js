const mongoose = require("mongoose");
const cartItemSchema=new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: {
          type: Number,
       required: true,
           min: 1,
           default: 1,
         },
})
module.exports=mongoose.model("CartItem",cartItemSchema)


