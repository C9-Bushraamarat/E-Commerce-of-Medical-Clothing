const cartItemModel=require("../models/cartItem");
const productModel=require("../models/productSchema")
const checkOut=async(req,res)=>{
let cart = {
  products: [
    {
      id: "659e6ed537ce4dda1e9abd2b",
      quantity: 2,
    },
    {
      id: "659e848a85efd8c14389bb0f",
      quantity: 3,
    },
    {
      id: 3,
      quantity: 2,
    },
    {
      id: 4,
      quantity: 1,
    },
  ]
}
let cartItems=req.body.cartItems
let totalPrice=0;
  for(var element of cartItems)
  {
    let product=await productModel.findById(element)
    if(!product){
      return res.status(500).send("some thing is wrong")
    }
totalPrice+=product.price;
  }
res.status(200).json(totalPrice)

}

module.exports={checkOut}