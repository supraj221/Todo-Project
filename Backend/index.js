const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

app.post("/todo", function(req, res) {

})

app.get("/todo", (req, res) => {

})

app.put("/completed", (req, res) => {

})