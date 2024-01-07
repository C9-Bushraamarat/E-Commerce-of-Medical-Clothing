const roleModel=require("../models/roleSchema");
const createNewRole=(req,res)=>{
    const{role,permission}=req.body
    console.log(req.body)
    const newRole=new roleModel({role,permission})
    newRole.save()
    .then((result)=>{
        res.status(201).json(result)
    }).catch((err)=>{
        res.status(500).json(err);
        console.log(err)
    })
}
module.exports={createNewRole};