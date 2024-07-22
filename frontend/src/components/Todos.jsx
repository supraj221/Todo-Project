/*
  todos = [
  {
    title: ,
    description: ,
    completed:  
  }
  ]
*/
export function Todos({todos}) {
  

  return <div>
    {todos.map((todo) => {
      return <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <button>{todo.completed ? "completed" : "complete"}</button>
        </div>
    })}
  </div>
}