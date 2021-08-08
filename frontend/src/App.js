import { useState, useEffect } from "react"
import { Switch, Route, Redirect, useHistory } from "react-router-dom"
import Games from "./compontents/Games"
import Header from "./compontents/Header"
import Home from "./compontents/Home"
import Signup from "./compontents/Signup"
import Login from "./compontents/Login"
import "./App.css"


 const App = () => {
  const [user, setUser]=useState({})
  const [loggedIn, setLoggedIn]= useState(false)
  let history =useHistory()

  useEffect(()=>{
    findMe()
  },[])

  useEffect(()=>{
    console.log(user, loggedIn)
  })

 
  const findMe=()=> {
    fetch("/me")
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data)
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
        {loggedIn ? (
          <Route exact path='/games'>
            <Games user={user} />
          </Route>
        ) : (
          <Redirect to='/login' />
        )}
      </Switch>
    </div>
    
  )
}
export default App