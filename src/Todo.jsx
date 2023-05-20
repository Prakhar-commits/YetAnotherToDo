import React, { useState } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import "./index.css";

let nextid = 4;
const initialTodos = [
  { id: 1, text: "Learn Javascript", done: true },
  { id: 2, text: "Build a todoapp", done: false },
  { id: 3, text: "Learn Typescript", done: false },
];
export default function Todo() {
  const [todos, setTodos] = useState(initialTodos);
  function handleAddTodo(text) {
    setTodos([
      ...todos,
      {
        id: nextid++,
        text,
        done: false,
      },
    ]);
  }


  function handleChange(updatedTodo) {
    setTodos(
      todos.map((existingTodo) => {
        if (existingTodo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return existingTodo;
        }
      })
    );
  }
function handleDelete(todoId){
setTodos(todos.filter((todo)=> todo.id !== todoId));
}

  return (
    <>
      <h2>Todos</h2>
      <AddToDo onAddTodo={handleAddTodo} />
      <ToDoList todos={todos} onTodoChange={handleChange} onTodoDelete={handleDelete} />
    </>
  );
}
