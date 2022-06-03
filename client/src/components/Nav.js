import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Nav({setUser}) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  
  
    return(
        <div classname="fullnav">
        <img src="https://cdn-icons-png.flaticon.com/512/103/103874.png"  width="125" height="125"/>
         
         <div className='nav-line'>
          
          <NavLink  className="nav" to="/fighters"> 
            Fighters
          </NavLink>

          <NavLink className="nav" to="/create"> 
            Create A Fighter
          </NavLink>

          <NavLink className="nav" to="/about"> 
            VS Page
          </NavLink>
          <button onClick={handleLogoutClick}>Logout</button>
         </div>
        </div>
    );
}

export default Nav