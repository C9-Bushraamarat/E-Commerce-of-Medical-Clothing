const productModel = require("../models/productSchema");
const createNewProduct = (req, res) => {
  const { image, name, description, color, price, size, category } = req.body;
  const newProduct=new productModel({
    image, name, description, color, price, size, category
  }).save()
  .then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(500).json(err)
    console.log(err)
  })
};
module.exports={createNewProduct};