import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.id === "username") setUsername(e.target.value);
    if (e.target.id === "password") setPassword(e.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const signupObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };
    fetch("/signup", signupObj)
    .then ((res)=> res.json())
      .then((data) => {
	      console.log(data)
        if (!!data.id) {
          setUser(data);
          setLoggedIn(true);
          history.push("/login");
        }
      })
      .catch((error) => console.log("error: ", error));
  };
  return (
    <div>
      <form onSubmit={handleSignup}>
        <h3>Sign up</h3>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />
        <br></br>

        <br></br>
        <input
          type="text"
          id="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Signup;
