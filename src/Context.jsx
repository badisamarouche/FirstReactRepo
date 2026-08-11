import CompA from "./CompA";
import { createContext, useState } from "react";

export const Data= createContext()
export const Statdata= createContext()


export default function Context(){
    const stats={ 
        goals:44,
        assists:12,
        dribbles:47,
    }
    const [person,setPerson]=useState({
        number:10,
        age:29,
        email:"badis@gmail.com"
    })
    const [name,setName]=useState("badis amarouche")
    function setNewName(thenewname){
setName(thenewname)
console.log(name);
}
    return(
        <div id="bigContext">
            <h1>{name}</h1>
            <Statdata value={stats} >
            <Data value={{person,setNewName,name}}>
                <CompA />
            </Data>

            </Statdata>
        </div>
    )
}