import React from "react";
import './App.css'

export default function Keyboard(props){
let arr="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let letters=arr.split('').map((letter,index)=>
        <button key={index} disabled={(props.class[letter]!=null )||props.off} className={
            
            (props.class[letter] )|| "yellow"}   id="keypad" onClick={()=>props.handleKey(letter)} > {letter}</button>
    )

// console.log(letters[0])
    return(
        <>
            {letters}
        </>
    )
}