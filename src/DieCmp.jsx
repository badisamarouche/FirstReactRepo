import React from "react";


export default function DieCmp(props){


    return(
        <button className={props.Class} onClick={(event)=>{
            props.handleClick(event)
        }}
        id={props.id}
        aria-label={`Die with value ${props.value}, ${props.isClicked?"Held":"Not Held"}`}
        >{props.value} </button>
    )
}