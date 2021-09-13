import { useState, useEffect } from "react"
import { Switch, Route, Redirect, useHistory } from "react-router-dom"
import Games from "./compontents/Games"
import SearchedGame from "./compontents/SearchedGame"
import Header from "./compontents/Header"
import Home from "./compontents/Home"
import Signup from "./compontents/Signup"
import Login from "./compontents/Login"
import "./App.css"


 const App = () => {
  const [user, setUser]=useState({})
  const [loggedIn, setLoggedIn]= useState(false)
  const [searchGame, setSearchGame]= useState([])
  let history =useHistory()

  useEffect(()=>{
    findMe()
  },[])

  // useEffect(()=>{
  //   console.log(user, loggedIn)
  // })
//  useEffect(()=>{
//    fetch("https://api.boardgameatlas.com/api/search?name=Splendor&client_id=aMBScZbBDn")
//    .then((res)=> res.json())
//    .then((data)=>{
    
//     //  console.log(data)
//      setSearchGame(data.games[0])
//    })

//  },[])
 
  const findMe=()=> {
    fetch("/me")
    .then((res)=> res.json())
    .then((data)=> {
      
    if (!data.error) {
      setUser(data)
      setLoggedIn(true)
      history.push("/games")
    }
    })
  }
  
  const handleLogout=(e)=> {
    e.preventDefault()
    const delObj= {
      method: "Delete"
    }
    fetch("/logout", delObj)
      
      .then (()=> {
       
        setLoggedIn(false)
        setUser({})
        history.push("/")
      })
  }
  // console.log(searchGame)
    return (
      
    <div>
      <Header loggedIn={loggedIn} handleLogout={handleLogout} />
      <h1>BOARD GAME FANATICS</h1>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path='/signup'>
          <Signup setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route exact path='/login'>
          <Login setLoggedIn={setLoggedIn} setUser={setUser} />
        </Route>
        <Route  path="/games/:id">
           <SearchedGame/> 
           
          </Route>

           
          <Route exact path='/games'>
        {loggedIn ? (
            <Games user={user} />
            
            ) : (
              <Redirect to='/login' />
              )}
              </Route>
      </Switch>
    </div>
    
  )
}
export default App