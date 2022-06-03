import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {

  const [username, setUsername] = useState("")
  
    return(
        <div classname="fullnav">
        <img src="https://cdn-icons-png.flaticon.com/512/103/103874.png"  width="125" height="125"/>
         
         <div className='nav-line'>
          <NavLink className="nav" to="/"> 
            Homepage
          </NavLink>
          
          <NavLink  className="nav" to="/fighters"> 
            Fighters
          </NavLink>

          <NavLink className="nav" to="/create"> 
            Create A Fighter
          </NavLink>

          <NavLink className="nav" to="/vspage"> 
            VS Page
          </NavLink>
        

         

          

          
         </div>

          <hr ></hr>  
       

        </div>
    );
}

export default Nav