import React, { useState } from "react";

function Todo({ index, todo, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p>{todo.text}</p>

      <div>
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "Not done" : "Done"}
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

export default Todo;
