const cartModel = require("../models/cartSchema");
const productModel=require("../models/productSchema");
const userModel=require("../models/userSchema")
const userCart=(req,res)=>{
const{productId}=req.body;
const id=req.token.userId
console.log(id);
//check for user ID
// const cartUser=userModel.findById(_id);
// //check if user have products in the cart
// // const alreadyExist=cartModel.findOne({userId:user._id}).populate("products")
cartModel.findOneAndUpdate({userId:id}, { $push: { products:{productId:productId} }},
  { new: true })
  // cartModel.findById({_id:"65b1040fe09d8a1b9f9e0366"})
.then((result)=>{
  {
    console.log(result)
    res.status(200).json(result);
} 

})
.catch ((err)=> {
  res.status(500).json(err);
})


}
const getCart = (req, res) => {
  const owner = req.user._id;
  
     cartModel.findOne({ owner })
      .then((result)=>{
    //     if (cart && cart.products.length > 0) {
    //       res.status(200).json(result);
    //  } else {
    //       // res.send(null);
    //  }
    console.log(result)
      })
 
  .catch ((err)=> {
     res.status(500).json(err);
 })
 
};

module.exports = { getCart,userCart };

