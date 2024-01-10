const productModel = require("../models/productSchema");
const createNewProduct = (req, res) => {
  const { image, name, description, color, price, size, category } = req.body;
  const newProduct=new productModel({
    image, name, description, color, price, size, category
  })
  newProduct.save()
  .then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(500).json(err)
    console.log(err)
  })
};
//get allprou,,remove product by id ,get by id ,,
const getAllProducts=(req,res)=>{
  productModel.find()
  .populate("Category")
  .exec()
  .then((products)=>{
    if(products.length){
      res.status(200).json({
        success:true,
        message:'All the products',
        productId:productId,
        products:products
      });
    }else{
      res.status(200).json({
        success:false,
        message:'No products yet'
      })
    }
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:`Server Error`,
      err:err.message
    });
  })
};
// const removeById=(req,res)=>{

// }
module.exports={createNewProduct};