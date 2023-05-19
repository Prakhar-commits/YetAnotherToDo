import React, { useReducer } from 'react'


function reducer(state , action){
if(action === "increase"){
    return state + 1;
}
if(action === "decrease"){
    return state -1 ;
}
return state;
}

export default function CounterReducer() {
  
  const [count, dispatch] = useReducer(reducer , 0);
  function increaseCounter(){
    dispatch("increase")
  }
  function decreaseCounter(){
    dispatch("decrease")
  }
return(
    <>
    <button onClick={increaseCounter}>+</button>
    {count}
    <button onClick={decreaseCounter}>-</button>
    </>
)
  
}
