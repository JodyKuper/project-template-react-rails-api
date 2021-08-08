import React from 'react'
import { useState, useEffect } from "react"


 const Home = () => {

	const[games, setGames]= useState([])

	useEffect(()=>{
		findGames()
	      }, [])
        
        useEffect(()=>{   
		
	      })      


	const findGames=() => {
		 fetch("/games")
		 .then((res)=> res.json())
		 .then((data)=> {
			setGames(data)

			 
		 })
	 }

	const gamesList=()=> {
		// debugger
		const list=games.map(games=>{
			return  <li>{games.name}<br></br></li>
		    })
			  return <ul>{list}</ul>
	    

	}

	 
	return (
		<div>
			<h4>Favorite Games</h4><br></br>
			{gamesList()}
		</div>
	)
}
export default Home