/*
  Todo {
    title: string,
    description: string,
    completed: boolean
  }
*/
const dotenv = require("dotenv")
const mongoose = require("mongoose");

//put this in a .env file
dotenv.config({ path: "./config.env" });

mongoose.connect("")

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  Todo
}