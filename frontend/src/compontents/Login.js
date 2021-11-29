import { useState } from "react"
import { useHistory} from "react-router-dom"
import { Form, Button } from "react-bootstrap"
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
			console.log(data)
			if (!!data.id) {
				setUser(data)
				setLoggedIn(true)
				history.push("/")
				
			}else {
				alert(data["error"])
			}
		})

	}
	return (
		<div>
							
      				<h3>Login With Username and Password</h3>
			<Form onSubmit={handleSubmit}>
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
					sixe=""
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
	)
}
export default Login