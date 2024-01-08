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
module.exports={createNewCategory};
