import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import React from 'react'
import { Link } from "react-router-dom"
import GameCard from "./GameCard"


 const Games = () => {
	 const[userData, setUserData]= useState([])
	 const[formData, setFormData]= useState("")
	 const [games, setGames]= useState([])
	
	
	 useEffect(()=>{
		findMyGames()
	      }, [])

       
	      const findMyGames =()=> {
		 fetch("/me")
		 .then((res)=> res.json())
		 .then((data)=> {
			setUserData(data)
			setGames(data.games)
			 
		 })
		
	 }
	
        const handleChange=(e)=> {
		setFormData(e.target.value)
		}

	

	const gameSubmit = (e) => {
		e.preventDefault()
		const postGame= {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
				},
			body: JSON.stringify({name: formData, user_id:userData.id})	
			}
			fetch("/games", postGame)
			.then ((res)=> res.json())
			.then((data) => {
				console.log(data)
				// debugger
				if (!!data.id){	
				console.log(data)
				setGames([...games,data])
				}else{
					alert(data["error"])
				}	
			})
			setFormData("")		
		
			
	
	}

	

	// const handleUpdategames=(updatedGame)=> {
	// 	setGames((games) =>
	// 	  games.map((game) => {
	// 	    return games.id === updatedGame.id ? updatedGame : game;
	// 	  })
	// 	);
	//       }
	// useEffect(()=>{
	// 	fetch(`/games/${games.id}`, {
	// 		method: "PATCH",
	// 		headers: {
	// 		  "Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({rating }),
	// 	      })
	// 		.then((r) => r.json())
	// 		.then()
		
	//       }, [])

       
	      const gameList = games.map((game) => {
		return (
			<GameCard
				key={game.id}
				game={game}
			/>
		)
	})
	
	    
	// 	const gameList=()=>{
	// 		if (!!games) {    
	// 	       const list=games.map(game=>{
	// 		   return  <h4><Link to={`/games/${game.id}`}>{game.name}<br></br></Link><Button onClick={ratingChange}>{game.rating}
	// 			   </Button></h4>
	// 	       })
	// 		     return <ul>{list}</ul>
	// 	       }
	//        }
       


		// console.log(userData)
		// console.log(game)

	return (
		
		<div>
			<h3>{userData.username}'s GAME LIBRARY<br></br></h3>
			<br></br>
			<h3>GAMES</h3>
			{/* {gameList()} */}
			{gameList}
			
			    
			<h4>Add New Games</h4>
			<Form onSubmit={gameSubmit} className="mb-4">
				<Form.Control 
				type="text" 
				onChange={handleChange}
				value={formData}
				placeholder="game"/>
				<Button type="submit">Submit</Button><br></br>
				<Link to= "/home">home</Link>

			</Form>



			

			
			

			
		</div>
	)
}
export default Games