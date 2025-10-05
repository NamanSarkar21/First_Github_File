import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="logo">iBanKo 💸</h1>
      <p className="subtitle">Cerebras-Powered Financial Intelligence</p>
      <div className="buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
      </div>
    </div>
  );
}
