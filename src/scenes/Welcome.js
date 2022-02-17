import React from "react";
import { useNavigate } from "react-router-dom";
import {getAuth, signOut} from "firebase/auth"
//you also can delete the import react

//you can also put the export default behind the function
export default function Welcome({user}){
    console.log(user)
    
    const auth = getAuth()
    const navigate = useNavigate()
    
    const handleLogout = () =>{
        signOut(auth)
        .then(() => {
        localStorage.clear()
        navigate('/login')
        
    })
    .catch(err => err)
}
    return (
        <>
        <h1>Welcome</h1>
        <h2>{user.displayName || user.email}</h2> 
        {user.photoURL && <img src={user.photoURL} alt="Profile picture of logged-in user"/>} 

        <button onClick={handleLogout}>Logout</button>     
        </>
    )
}