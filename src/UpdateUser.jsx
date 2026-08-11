import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useState } from "react";



const UpdateUser = () => {
    const {updateUser}=useContext(UserContext)
    const [newName,setNewName]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(newName.trim()){
            updateUser(newName)
            setNewName('')
        }
    }
  return (
    <div>
        <h2>UpdateUser  </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder="enter a new name" />
            <button id="updatebut" type="submit"></button>
        </form>
    </div>
  )
}

export default UpdateUser  