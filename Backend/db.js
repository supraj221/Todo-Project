/*
  Todo {
    title: string,
    description: string,
    completed: boolean
  }
*/

const mongoose = require("mongoose");
//put this in a .env file
mongoose.connect("mongodb+srv://rajgijre:Supraj25@cluster0.hwuw8cg.mongodb.net/")
const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports({
  Todo
})