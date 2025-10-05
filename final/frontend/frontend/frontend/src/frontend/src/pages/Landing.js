import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Welcome to Financial AI Dashboard</h1>
      <p>Analyze portfolio, forecast risk & get news summaries powered by AI</p>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>
  );
}
