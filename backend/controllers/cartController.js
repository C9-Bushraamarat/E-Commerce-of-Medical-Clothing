const cartModel = require("../models/cartSchema");
const createnewCart = (req, res) => {
  const { productId, userId } = req.body;
  const newCart=new cartModel({productId, userId})
  newCart.save()
  .then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.json(err)
  })
};
module.exports={createnewCart}
