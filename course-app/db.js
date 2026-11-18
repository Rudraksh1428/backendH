const { Schema } = require("mongoose");

const ObjectId = mongoose.ObjectId;

const userSchema = newSchema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = newSchema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);

module.exports = {
  userModel,adminModel 
};
