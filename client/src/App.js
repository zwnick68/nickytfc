import React, {useState, useEffect} from 'react';
import FighterContainer from './components/FighterContainer';
import CreateFighter from './components/CreateFighter';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login';

import './App.css';


function App() {

  const [data, setData] = useState([])
  const [user, setUser] = useState(null)
  

  let request= async()=>{
    let req = await fetch('/fighters')
    let res = await req.json()
      setData(res)
    }
    
    useEffect(() => {
      request()
    }, [])

    // function handleLogin(user) {
    //     setUser(user);
    //   }
    
    //   function handleLogout() {
    //     setUser(null);
    //   }
    
      if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
     <Nav user= {user} setUser={setUser}/>
    <Switch>
        <Route exact path="/fighters"> 
          <FighterContainer user={user} fighters={data} />
       </Route>
     <Route exact path="/fighters"> 
          <CreateFighter  />
     </Route>
    </Switch>
    <img className="home-image" src="https://wallpaperaccess.com/full/4487462.jpg" height="800px"/>
   
    </div>
  );
}

export default App;
