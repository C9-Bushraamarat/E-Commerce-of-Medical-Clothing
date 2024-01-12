const categoryModel = require("../models/categorySchema");
const createNewCategory = (req, res) => {
  const { name, image } = req.body;
  const newCategory=new categoryModel({name,image})
  newCategory.save()
  .then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.json(err);
  })
};
const getAllCategory=(req,res)=>{
  categoryModel.find().exec()
  .then((categories)=>{
    if(categories.length){
      res.status(200).json({
        success:true,
        message:`All The Categories`,
        categories:categories
      })
    }else{
      res.status(200).json({
        success:false,
        message:`No categories Yet`
      })
    }
  }).catch((err)=>{
    res.status(500).json({
      success:false,
      message:`Server Error`,
      err:err.message
    })
  })
};

module.exports={createNewCategory,getAllCategory};
