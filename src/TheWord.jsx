import React from "react";


export default function TheWord(props){

let styling={
    width:"50px",
    height:"50px",
    fontSize:"32px",
    fontWeight:"700",
    backgroundColor:"#02456f",
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderBottom:"solid 2px  #FFF",
    

}

let thewordletters= props.word.split('').map((letter,index)=> 
    <div key={index} style={styling} className={((!props.foundletter.includes(letter))&(props.gameLost))?"notguessed":"guessed"} > {((props.foundletter.includes(letter))||(props.gameLost))?letter:null}</div> 
)
return(
<>
{thewordletters}

</>)

}