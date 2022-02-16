import React from "react";
//you also can delete the import react

//you can also put the export default behind the function
export default function Welcome({user}){
    console.log(user)
    return (
        <>
        <h1>Welcome</h1>
        <h2>{user.displayName || user.email}</h2> 
        {user.photoURL && <img src={user.photoURL} alt="Profile picture of logged-in user"/>}      
        </>
    )
}