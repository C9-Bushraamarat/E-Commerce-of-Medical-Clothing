const userModel = require("../models/userSchema");
const createNewUser = (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  const newUser = new userModel({ firstName, lastName, email, password, role })
    newUser.save()
    .then((result) => {
      res.status(201).json({
        result: result,
        message: "new user added  successfully",
      });
    })
    .catch((err) => {
      res.ststus(500).json(err);
    });
};
module.exports={createNewUser}