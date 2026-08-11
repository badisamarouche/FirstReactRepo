import { createPortal } from "react-dom"
export default function Portal(props){



    return createPortal(
(props.correct!=null)&&(<div className="Portal" id={(props.correct==true)?"correct":(props.correct==false)?"false":null} >

{(props.correct==true)?"Correct":(props.correct==false)?"Try Again":null}
</div>),document.querySelector("#theportal")
    
)}