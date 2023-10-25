import { useState } from "react";
import Title from "./components/Title";
import TodosList from "./components/TodosList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Cleaning rooms",
      completed: false,
    },
    {
      id: 2,
      title: "Doing Home work",
      completed: true,
    },
    {
      id: 3,
      title: "Reading books",
      completed: false,
    },
  ]);

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(filteredTodos)
  }

  return <div>
    <Title/>
    <TodosList todos={todos} handleDelete={handleDelete}/>
  </div>;
}

export default App;
