import React from 'react'

export default function ToDoList({todos}) {
  return (
    <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
               <Todo todo={todo}/>
            </li>
        ))}
    </ul>
  )
}

function Todo({todo}){
    return(
    <>
    <input type="checkbox" name={`${todo.id}-done`} id={`${todo.id}-done`} checked={todo.done} />
    {todo.text}
    </>
    )
}