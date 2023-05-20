import React from 'react'
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

let nextid = 4;
const initialTodos = [
    {id:1 , todo: "Learn Javascript" , done:true},
    {id:2,todo:"Build a todoapp" , done:false},
    {id:3, todo:"Learn Typescript", done:false},
]
export default function Todo() {
    const [todos, setTodos] = uTeState(initialTodos)
    function handleAddTodo(){
        setTodos([
            ...todos,
{
    id:nextid++,
    todo:text,
    done:false,
}        ])
    }
 
    return (
<>
<h2>Todos</h2>
<AddToDo onAddTodo={handleAddTodo}/>
<ToDoList todos={todos}/>
</>
    )
    
 
  
}