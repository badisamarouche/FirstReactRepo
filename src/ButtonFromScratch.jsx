import React from "react";


export default function ButtonFromScratch(props){


    return(
        <button disabled={(props.Clicked)?true:false} onClick={props.onClick} className={(props.Clicked)?"ClickedButton":"Diebutton"}  id={props.id}  >{props.value} </button>
    )

}