import React, { useState } from "react";
import CustomeInput from "./CustomeInput";

export default function Input() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const usernameRegex = /.*/;

  const validation = () => {
    if (username === "" || password === "") {
      setError(true);
    } else if (!passwordRegex.test(password)) {
      setError(true);
    } else {
      setError(false);
      alert("Succesfully Submit");
    }
  };

  return (
    <div style={{ display: "flex", gap: 10 ,height:"50vh",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
      <CustomeInput
        placeholder="Username"
        onchange={(e) => setUsername(e.target.value)}
        value={username}
        error={error}
        regex={usernameRegex}
        inputErr="Enter a Username"
      />
      <CustomeInput
        placeholder="Password"
        onchange={(e) => setPassword(e.target.value)}
        value={password}
        error={error}
        regex={passwordRegex}
        inputErr="Enter a Password"
        checkingErr="Plesae Enter a Valid password"
      />
      
      <button onClick={validation}>submit</button>
    </div>
  );
}
