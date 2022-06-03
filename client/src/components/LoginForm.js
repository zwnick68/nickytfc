import React, { useState } from "react";

function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password}),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          }
          else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
      return (
        <>
        <form onSubmit={handleSubmit}>
          <h3>Login With Username and Password</h3>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <button type="submit">Login</button>
        </form>
      {errors}
      
    </>
      )
}
export default LoginForm;