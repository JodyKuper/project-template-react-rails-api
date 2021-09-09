import React from 'react'
import { useState, useEffect } from "react"
import {  } from 'react-bootstrap'
import { Link } from "react-router-dom"




 const Home = () => {

	const[games, setGames]= useState([])

	useEffect(()=>{
		findGames()
	      }, [])
        
        useEffect(()=>{   
		
	      })      


	const findGames=() => {
		 fetch("/favorite")
		 .then((res)=> res.json())
		 .then((data)=> {
			setGames(data)

			 
		 })
	 }

	const gamesList=()=> {
		// debugger
		const list=games.map(game=>{
			return  <h4><Link to= {`/games/${game.id}`}>{game.name}<br></br></Link></h4>
		
	
		    })
			  return <ul>{list}</ul>
	    

	}

	 
	return (
		<div>
			<Link to= '/games'>my games</Link>
			<h3>Favorite Games</h3><br></br>
			{gamesList()}
		</div>
	)
}
export default Home