import React, { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await signup({username,password});
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
