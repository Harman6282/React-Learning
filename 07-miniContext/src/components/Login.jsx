import React, { useState, useContext } from "react";

import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="p-2 border-2 rounded"
      />{" "}
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="p-2 border-2 rounded"
      />
      <button className="bg-slate-300 p-2 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
