const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")
const app = express();
const { createTodo, updateTodo } = require("./types");
const {Todo} = require("./db")

app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config.env" });

const port = process.env.PORT;


//add todo
app.post("/todo", async function(req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    res.status(411).json({
      message: "Wrong inputs"
    })

    return;
  }

  //put it in DB
  await Todo.create({
    title: parsedPayload.data.title,
    description: parsedPayload.data.description,
    completed: false
  })

  res.json({
    message: "Todo created successfully"
  })

})


//get all todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    todos
  });
})


//mark as complete
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success) {
    res.status(411).json({
      message: "Wrong inputs"
    });
  }

  await Todo.updateOne({
    _id : parsedPayload.id
  }, {
    completed: true
  })

  res.json({
    message: "Todo marked as completed"
  })



})

app.listen(3000);