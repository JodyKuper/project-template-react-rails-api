import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap"

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
          history.push("/home");
        }else {
          // debugger
          alert(data["error"])
        }
      })
      // .catch((error) => console.log("error: ", error));
  };
  return (
    <div>
        <h3>Sign up</h3>
        <Form onSubmit={handleSignup}>
				<Form.Group className='mb-3'controlId='formBasicUsername'>
					
      				<Form.Control
				        size=""
        				type="text"
					id="username"
        				placeholder="username"
					value={username}
        				onChange={handleChange}
        				
      				/>
				   </Form.Group>   
				      <br></br>
      				
				      
				      <Form.Group className='mb-3'controlId='formBasicUsername'>      
				<Form.Control
					size=""
					type="text"
					id="password"
					placeholder="password"
					value={password}
					onChange={handleChange}
					/>
					</Form.Group>
					
				<Button type="submit">Submit</Button>
    			</Form>
    </div>
  );
};
export default Signup
