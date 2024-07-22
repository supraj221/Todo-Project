import { useState } from "react"

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  return <div>
    <input  type="text" placeholder="Add a todo" onChange={(e) => {
      const value = e.target.value;
      setTitle(value);
    }}></input> <br /><br />

    <input type="text" placeholder="Add Description" onChange={(e) => {
      const value = e.target.value;
      setDescription(value);
    }}></input><br/><br/>
    
    <button onClick={() => {
      fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title,
          description
        }), 
        headers: {
          "content-type": "application/json"
        }
      })
        .then(async (response) => {
          const json = await response.json();
          alert("Todo Added");
        })
    }}>Add a task</button>
  </div>
}