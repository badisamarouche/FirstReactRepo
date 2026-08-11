import { useContext } from "react"; 
import { userContext } from "./Context";


const UserProfile=()=>{
    const {user}=useContext(userContext)

return(
    <div>
        <h1>User : {user.name}</h1>
    </div>
)
}

export default UserProfile