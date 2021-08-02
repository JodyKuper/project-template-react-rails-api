import { useState } from "react"
import { useHistory} from "react-router-dom"
import React from 'react'

const Login = ({setUser, setLoggedIn}) => {
	const [username, setUsername]= useState("")
	const [password, setPassword]= useState("")
	const history= useHistory()
	
	const handleChange=(e)=> {
		console.log(e.target)
		if (e.target.id==="username") setUsername(e.target.value)
		if (e.target.id==="password") setPassword(e.target.value)
	} 

	
	

	const handleSubmit=(e)=>  {
		e.preventDefault()
		const loginObj= {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({username, password}),	
		
		}
		fetch("/login", loginObj)
		.then ((res)=> res.json())
		.then((data) => {
			if (!!data.id) {
				setUser(data)
				setLoggedIn(true)
				history.push("/games")
			}
		})

	}
	return (
		<div>
							
			<form onSubmit={handleSubmit}>
      				<h3>Login With Username and Password</h3>
      				<input
        				type="text"
					id="username"
        				placeholder="username"
					value={username}
        				onChange={handleChange}
        				
      				/><br></br>
      				
				      <br></br>
				<input
					type="text"
					id="password"
					placeholder="password"
					value={password}
					onChange={handleChange}
					/><br></br><br></br>
				<button type="submit">Submit</button>
    			</form>
			
		</div>
	)
}
export default Login