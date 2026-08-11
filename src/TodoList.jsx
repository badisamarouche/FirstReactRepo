import React, { useState,useRef } from 'react'

function TodoList () {
const [theList,setList]=useState([])
let [thetask,setTask]=useState("")
const inputref=useRef(null)
function handleAdd(){
    if(thetask!="")
    {setList(prevlist=>[...prevlist,`${thetask}`])
    // inputref.current.value=""
    setTask("")
}
}
function supress(ide){
    console.log(theList.filter((index)=>index!=ide))
setList(theList.filter((task,index)=>index!=ide))
}
let taskList=theList.map((task,index)=>(<li key={index}><span>{task } </span> 
<button onClick={()=>supress(index)}>X</button></li>))
  return (
    <div>
        <div className='inputfield'>
        <form action={handleAdd}>
        <input ref={inputref} value={thetask} type="text" name="task" id="task" onChange={(e)=> setTask(`${e.target.value}`)}  />
        </form>
        <button onClick={handleAdd}>Add Task</button>
        </div>
    <ul>
        {taskList}
        </ul>
    </div>
  )
}

export default TodoList