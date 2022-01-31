import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "./App.css";
import { v4 as uuidv4} from "uuid";


function App() {
  
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "React Hooks in Depth",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "Write Articles @ Medium",
      isCompleted: false,
    },
    {
      id: uuidv4(),
      text: "Share article at Reddit",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    // make a copy of todos object and add a new object (id, text, and isCompleted)
    const newTodos = [...todos, {id: uuidv4(),text:text,isCompleted:false}]
    // update the todos array with the setTodos function
    setTodos(newTodos);
  };

  // Week 3 assignment (you can work on it now if you want):
  const completeTodo = (index) => {
    // make a copy of todos array 
    // toggle the isCompleted value of the todo at the index
    // update the todos array with the setTodos function
  };

  // Week 3 assignment (you can work on it now if you want):
  const removeTodo = (index) => {
     // make a copy of todos array 
     // remove the todo at the index
     // update the todos array with the setTodos function
  };

  return (
    
    <div className="app">
      
      <div className="todo-list">
        <h1 className="title">Todo App</h1>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            index={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
