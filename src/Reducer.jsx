import { useReducer,useState,useRef, useEffect } from "react";
import React from 'react'
import { reducer } from "./CounterReducer";
import Timer from "./TimerRef";

const initialState={count:0}

const Reducer = () => {
    const inputEl=useRef(null)
    const [state,dispatch]=useReducer(reducer,initialState)
const [thediff,setDiff]=useState(0)
function handleKey(event){
setDiff(event.target.value)
console.log(event.target.value)
}
function focus(){
    inputEl.current.focus()
}
useEffect(()=>{
    focus();
},[])

  return (
    <div>
        <h1>The count: {state.count}</h1>
        <button onClick={()=>dispatch({type:"decrement by 5"})}>MINUS 5</button>
        <button onClick={()=>dispatch({type:"decrement",diff:Number(thediff)})}>DECREMENT</button>
        <button onClick={()=>dispatch({type:"reset"})}>RESET</button>
        <button onClick={()=>dispatch({type:"increment",diff:Number(thediff)})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:"incrementby5"})}>PLUS 5 </button>
        <br />
        
        <input ref={inputEl} type="number" name="diffcounter" id="nameinput" value={thediff} onChange={(e)=>{handleKey(e)}} />
        <br />
        <button onClick={focus}>Focus</button>
        <br />
        <Timer/>
    </div>
  )

}
export default Reducer