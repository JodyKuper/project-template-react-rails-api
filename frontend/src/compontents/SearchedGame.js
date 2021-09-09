import React from 'react'
import { useEffect, useState } from "react"

 const SearchedGame = () => {
	 const [game, setGame]= useState()

	 useEffect(() => {
		fetch("/games/search")
		.then((res)=> res.json())
		.then((data)=>{
		  console.log(data)
	        setGame(data)
		}) 
		 
	 }, [])
	


	return (
		<div>
		<h3>games</h3>
		</div>
	)
}
export default SearchedGame