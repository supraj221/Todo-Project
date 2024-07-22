const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");

app.use(express.json());

app.post("/todo", function(req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    res.status(411).json({
      message: "Wrong inputs"
    })

    return;
  }

  //put it in DB

})

app.get("/todo", (req, res) => {

})

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success) {
    res.status(411).json({
      message: "Wrong inputs"
    });
  }

})