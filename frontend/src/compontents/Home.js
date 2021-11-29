import React from 'react'
import { useState, useEffect } from "react"
import {  } from 'react-bootstrap'
import { Link } from "react-router-dom"

 const Home = () => {

	const[games, setGames]= useState([])
	const[best, setBest]= useState("")

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
		const list=games.map(game=>{
			return  <h4><Link to= {`home/${game.id}`}>{game.name}<br></br></Link></h4>
		    })
			  return <ul>{list}</ul>
	}
	const topGame=(e)=> {
		
		fetch("/favoriteGame")
		.then((res)=> res.json())
		.then((data)=>{
			setBest(data)
		})
	}

	return (
		<div>
			
			<Link to= '/games'>my game libary</Link>
			<h3>Fanactics Games</h3><br></br>
			{gamesList()}
			<button onClick={topGame}>Click for highest rated games</button>
			{best.name}

		</div>
	)
}
export default Home