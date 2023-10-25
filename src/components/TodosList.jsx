import React from "react";

function TodosList({ todos, handleDelete }) {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodosList;
