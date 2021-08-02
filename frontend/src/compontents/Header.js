import { Link } from "react-router-dom"
import React from 'react'


      

const Header = ({ loggedIn, handleLogout }) => {
	if (loggedIn) {
	return (
		<header>
		 <button onClick={handleLogout}>Logout</button>
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