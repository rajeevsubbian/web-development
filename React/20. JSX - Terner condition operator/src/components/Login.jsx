import React from "react";
import Input from "./Input";

function Login() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
