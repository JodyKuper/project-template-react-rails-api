import { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import React from 'react'

 const Games = ({user}) => {
	 const[userData, setUserData]= useState([])
	//  const[newGame, setNewGame]= useState()
	 const[game, setGame]= useState()

	useEffect(()=>{
		findMyGames()
	      }, [])

        
	useEffect(()=>{   
		// console.log(userData)
	      })

	useEffect((e)=>{
		gameSubmit()
	}, [])   
	
	      const findMyGames =()=> {
	 // { useEffect(() => {
		 fetch("/me")
		 .then((res)=> res.json())
		 .then((data)=> {
			
			//  debugger
			//  console.log(data)
			setUserData(data)
			 
		 })
		
	 }
	
	 const gameList=()=>{
		 if (!!userData.games) {    
		const list=userData.games.map(games=>{
		    return  <li>{games.name}<br></br></li>
		})
		      return <ul>{list}</ul>
		}
	}

	const handleChange=(e)=> {
		// debugger

			setGame(e.target.value)
		}

	const gameSubmit=(e)=>  {
			// e.preventDefault()
			const postGame= {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({name:game, user_id:userData.id})	
			
			}
			// debugger
			fetch("/games", postGame)
			.then ((res)=> res.json())
			.then((data) => {
				console.log(data)
				// setNewGame(data)	
				})
			
	
		}	


	

	return (
		<div>
			{userData.username}<br></br>
			<br></br>
			<h3>GAMES</h3>
			{gameList()}
			<h4>Add New Games</h4>
			<Form onSubmit={gameSubmit} className="mb-4">
				<Form.Control 
				type="text" 
				onChange={handleChange}
				value={game}
				placeholder="game"/>
			
				<Button type="submit">Submit</Button>
			</Form>



			

			
			

			
		</div>
	)
}
export default Games