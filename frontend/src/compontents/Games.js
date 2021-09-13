import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import React from 'react'
import { Link } from "react-router-dom"


 const Games = ({user}) => {
	 const[userData, setUserData]= useState({})
	 const[games, setGames]= useState([])

	useEffect(()=>{
		findMyGames()
	      }, [])

       
	      const findMyGames =()=> {
		 fetch("/me")
		 .then((res)=> res.json())
		 .then((data)=> {
			
			//  debugger
			//  console.log(data)
			setUserData(data)
			 
		 })
		
	 }
	
	const handleChange=(e)=> {
		// debugger

		setGames(e.target.value)
		}

	// function handleChange(event) {
	// 	setUserData({
	// 	  ...userData,
	// 	  [event.target.name]: event.target.value,
	// 	});
	//       }

	const gameSubmit = (e) => {
		e.preventDefault()
		const postGame= {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
				},
			body: JSON.stringify({name:games, user_id:userData.id})	
			}
			// debugger
	
			fetch("/games", postGame)
			.then ((res)=> res.json())
			.then((data) => {
				if (!!data.id){	
				console.log(data)
				addUserData(data)
				}else{
					alert(data["error"])
				}	
					
			})

			const addUserData = (userData) => {
				setGames(prevUserData=>[...prevUserData,userData])
			}
		
			
	
		}
		const gameList=()=>{
			if (!!userData.games) {    
		       const list=userData.games.map(game=>{
			   return  <h4><Link to={`/games/${game.id}`}>{game.name}<br></br></Link>{game.rating}</h4>
		       })
			     return <ul>{list}</ul>
		       }
	       }
       


		console.log(userData)
		// console.log(games)

	return (
		
		<div>
			<h3>{userData.username}'s GAME LIBRARY<br></br></h3>
			<br></br>
			<h3>GAMES</h3>
			{gameList()}
			<h4>Add New Games</h4>
			<Form onSubmit={gameSubmit} className="mb-4">
				<Form.Control 
				type="text" 
				onChange={handleChange}
				value={games}
				placeholder="game"/>
				<Button type="submit">Submit</Button><br></br>
				<Link to= "/">home</Link>

			</Form>



			

			
			

			
		</div>
	)
}
export default Games