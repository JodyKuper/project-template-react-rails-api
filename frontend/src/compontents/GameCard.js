import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import {  Button } from "react-bootstrap"

 const GameCard = (game) => {
	//  console.log(game)
	 const [toggleForm, setToggleForm]=useState(false)
	 const [form, setForm]=useState({
		 rating: 0
	 })
	 console.log(form)

const handleToggleForm=()=>{
	setToggleForm(mUv=> !mUv)

}
	
const handleInput=(e)=>{
		setForm({
			[e.target.name]: e.target.value
		})

	}

	
	function handleSubmit(e) {	
		fetch(`/games/${game.game.id}`, {
		method: "PATCH"	,
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(form),	
		})
		.then((r) => r.json())
		.then ((data)=>{
			
			// setForm(...form.rating, data)

		})
	}

	

	return (
		<div>
		<Link to= {`/games/${game.game.id}`}>{game.game.name}</Link>
		<h3>{game.game.rating}</h3>
		<Button onClick={handleToggleForm}>rate 1-10</Button>
		{toggleForm ? (
				<form onSubmit={handleSubmit}>
					<input type="number" placeolder="name" name="rating" value={form.rating} onChange={handleInput}/>
					<button type="submit">RATE</button>
				</form>
			) : null}
		</div>
	)
}
export default GameCard;
