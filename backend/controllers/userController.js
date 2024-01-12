const userModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = (req, res) => {
  const { firstName, lastName, email, password,cart, role } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    email,
    password,
    cart,
    role: "659a742b043a900ce14aecdc",
    
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        result: result,
        message: "Account Created Successfully",
      });
    })
    .catch((err) => {
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};

const Login = (req, res) => {
  const {email,password} = req.body;
  userModel
    .findOne({ email })
    .populate("role","-_id")
    .then(async (result) => {
      console.log(result);
      if (!result) {
        res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      }
else{
      try {
        const valid = await bcrypt.compare(password, result.password);
        console.log("valid:>>", valid);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        } else {
          const payload = {
            userId: result._id,
            author: result.firstName,
            role: result.role,
          };
          const options = {
            expiresIn: "60m",
          };
          const token = jwt.sign(payload, process.env.SECRET, options);
          res.status(200).json({
            success: true,
            message: `Valid login credentials`,
            token: token,
          });
        }
      } catch (error) {
        throw new Error(error.message);
      }
 } })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
module.exports = { Register, Login };
