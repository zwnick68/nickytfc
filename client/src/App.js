import React, {useState, useEffect} from 'react';
import FighterContainer from './components/FighterContainer';
import CreateFighter from './components/CreateFighter';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';

import './App.css';


function App() {

  const [data, setData] = useState([])
  const [user, setUser] = useState(null);

  let request= async()=>{
    let req = await fetch('/fighters')
    let res = await req.json()
      setData(res)
    }
    
    useEffect(() => {
      request()
    }, [])


    function handleLogin(user) {
      setUser(user);
    }
  
    function handleLogout() {
      setUser(null);
    }
  

  return (
    <div className="App">
     <Nav/>
     
     
    
    <Switch>
        <Route exact path="/"> 
         <HomePage />
       </Route>
        <Route exact path="/fighters"> 
          <FighterContainer fighters={data} />
       </Route>
     <Route exact path="/create"> 
          <CreateFighter  />
     </Route>
     
    </Switch>

   
    </div>
  );
}

export default App;
