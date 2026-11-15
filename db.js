const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = newSchema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const Todo = newSchema({
  userId: ObjectId,
  title: String,
  done: Boolean,
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todo", Todo);

module.exports = {
  UserModel,TodoModel, 
};