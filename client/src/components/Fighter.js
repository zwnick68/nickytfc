import React,{useState,useEffect} from "react";
// import ShowFighter from "../components/ShowFighter";
import { NavLink } from 'react-router-dom';
import ShowFighter from "./ShowFighter";

function Fighter({fighter}){
   const[fighterId,setFighterId] = useState(null)
console.log(fighter)

 const[showFighter,setShowFighters] = useState([])
   
const{id,nickname,name,fight_record,age,img,ranking, height,weight,reach} = fighter
   
  
   //    useEffect(() => {
   //       (async() => {
   //           let req = await fetch(`/fighters/${fighter.id}`)
   //           let res = req.json()
   //          setShowFighters(res)
   //       })()   
   //      }, [fighter])
        
   // console.log(showFighter)

// if (!showFighter) return <ShowFighter fighter={fighter} />
return(
   <NavLink  className="nav" to={`/fighters/${fighter.id}`}>
      {/* <ShowFighter showFighter={showFighter}/>  */}
   <div className="fighter-item" >
      <img src={img} class="fighter-img"/>
      <h1> {name} </h1>   
         <h3>Ranking: {ranking}</h3>
    </div>
     </NavLink>  
)

}

export default Fighter;