import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import React from 'react'


      

const Header = ({ loggedIn, handleLogout }) => {
	if (loggedIn) {
	return (
		<header>
		 <Button onClick={handleLogout}>Logout</Button>
    		  </header>
    )
 	 } else {
    	return (
      <header>
        <Link to='/login'>Login</Link><br></br>
        <Link to='/signup'>Sign up</Link>

	</header>
	)
		}			
}
export default Header