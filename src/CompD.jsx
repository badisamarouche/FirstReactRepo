import { useContext, useState } from "react"
import { Data } from "./Context"
import { Statdata } from "./Context"
export default function CompD(){
const mystat=useContext(Statdata)
const myperson= useContext(Data).person
const setNew= useContext(Data).setNewName
const name= useContext(Data).name
function handleSubmit(formData){

const newname=formData.get("username")
setNew(newname)
console.log(newname)
}
    return(
             
       <div id="CompD">
        
            <h2>{name}</h2>
            <h2>{myperson.email}</h2>
            <h3>Goals: {mystat.goals} </h3>
            <h3>assists: {mystat.assists} </h3>
            <h3>dribbles: {mystat.dribbles} </h3>
            <form action={handleSubmit}>

            <input name="username" type="text" id="nameinput" />
            </form>
            </div>
        
        
        
    )
}