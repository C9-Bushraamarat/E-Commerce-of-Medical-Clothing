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
  .populate("category")
  .exec()
  .then((products)=>{
    if(products.length){
      res.status(200).json({
        success:true,
        message:'All the products',
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
const getProductById=(req,res)=>{
  let id=req.params.id;
  productModel.
  findById(id)
  .populate("category")
  .exec()
  .then((product)=>{
    if(!product) {
      return  res.status(404).json({
        success:false,
        message:`The article with id => ${id} not found`
      });
    }else{
      res.status(200).json({
        success:true,
        message:`The article ${id}`,
        product:product,
      });
    }
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:`Server Error`,
      err:err.message
    });
  })
};
const removeProductById=(req,res)=>{
const id=req.params.id;
productModel
.findByIdAndDelete(id)
.then((result)=>{
  if(!result){
    return res.status(404).json({
      success:false,
      message:`The article with id => ${id} not found`,
    });
  }else{
    res.status(200).json({
      success:true,
      message:`Product Deleted`,
    });
  }
}).catch((err)=>{
  res.status(500).json({
    success:false,
    message:`Server Error`,
    err:err.message,
  });
})
 }
module.exports={createNewProduct,getAllProducts,getProductById,removeProductById};