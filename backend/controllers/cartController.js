const cartModel = require("../models/cartSchema");
const productModel=require("../models/productSchema");
const userModel=require("../models/userSchema")
const userCart=(req,res)=>{
res.send("Hello From Cart")
const{productId,quantity,total}=req.body;
const{_id}=req.user
//check for user ID
const cartUser=userModel.findById(_id);
//check if user have products in the cart
const alreadyExist=cartModel.findOne({userId:user._id}).populate("products")
}
const getCart = (req, res) => {
  const owner = req.user._id;
  
      const cart =cartModel.findOne({ owner })
      .then((result)=>{
        if (cart && cart.products.length > 0) {
          res.status(200).json(result);
     } else {
          res.send(null);
     }
      })
 
  .catch ((err)=> {
     res.status(500).json(err);
 })
 
};

module.exports = { getCart,userCart };

