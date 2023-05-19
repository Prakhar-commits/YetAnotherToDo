import React from 'react'

export default function AddToDo({onAddTodo}) {
    const [text, setText] = useState("")
  return (
    <>
    <input type="text" name='newTodo' id='newTodo' value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={()=>{
        onAddTodo();
        setText("");
    }}>
    
    </button>
    </>
  )
}
