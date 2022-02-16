import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./scenes/Login";
import Welcome from "./scenes/Welcome";
import Signup from "./scenes/Signup";


export default function App() {
  const [user, setUser] = useState();
  return (
    <Routes>
      <Route path="/login" element={<Login setUser={setUser}/>} />
      <Route path="/signup" element={<Signup setUser={setUser}/>} />
      <Route path="/" element={user 
        ? <Welcome user={user}/> 
        : <Login setUser={setUser}/>} />
    </Routes>
  );
}