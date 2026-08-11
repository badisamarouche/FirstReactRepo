import { UserContext } from "./UserContext";
import { useContext } from "react";
import UpdateUser from "./UpdateUser";

    
const UserProfile = () => {

    const {user}=useContext(UserContext)
  return    (
    <div>
        <h1>User Profile</h1>
        <h2>{user.name}</h2>
        <UpdateUser/>
    </div>


  )
}
    
export default UserProfile