const userModel = require("../models/userSchema");
const Register = (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  const newUser = new userModel({ firstName, lastName, email, password, role })
    newUser.save()
    .then((result) => {
      res.status(201).json({
        result: result,
        message: "Account Created Successfully",
      });
    })
    .catch((err) => {
      res.ststus(500).json({
        err:err,
        message: "The email already exists"
      });
    });
};
module.exports={Register}