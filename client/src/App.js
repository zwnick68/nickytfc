import React, {useState, useEffect} from 'react';
import FighterContainer from './components/FighterContainer';
import CreateFighter from './components/CreateFighter';
import Nav from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import './App.css';


function App() {

  const [data, setData]=useState([])

  let request= async()=>{
    let req = await fetch('/fighters')
    let res = await req.json()
      setData(res)
    }
    
    useEffect(() => {
      request()
    }, [])
  

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
          <CreateFighter setData= {setData} />
     </Route>
    </Switch>

   
    </div>
  );
}

export default App;
