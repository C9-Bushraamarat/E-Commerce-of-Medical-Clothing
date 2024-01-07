const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"}
});
module.exports = mongoose.model("User", userSchema);