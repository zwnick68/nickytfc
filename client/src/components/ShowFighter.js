import React, {useState, useEffect} from 'react'
import '../showfighter.css'

function ShowFighter ({fighters, showFighter}) {
    // const deleteFighter = async () => {
    //     let req = await fetch(`fighters/`, {
    //          method: 'DELETE',
    //          headers: {'Content-Type': 'application/json'},
    //      })
    //      if (req.ok){ 
    //          setFighters((prevState)=>{
    //          let deletedFighter = prevState.filter((elemente)=>{
    //          return elemente.id!==element.id
    //          })
    //          return deletedFighter
    //      })
 
    //      }
    //  } 
    console.log(showFighter)
    return(
        <div className="show-fighter">
            <div className="show-fighter-flex">
                 <img className="show-fighter-img" src={showFighter.img}/>
                 <h2 className="show-fighter-text" style={{color: "white", fontSize: "18px"}}>Ranking: {showFighter.ranking}</h2>
                 <h2 className="show-fighter-text">Record: {showFighter.fight_record}</h2>
                 <h2 className="show-fighter-text">Age: {showFighter.age}</h2>
                 <h2 className="show-fighter-text">Height: {showFighter.height} in</h2>
                 <h2 className="show-fighter-text">Weight: {showFighter.weight} lbs</h2>
                 <h2 className="show-fighter-text">Reach: {showFighter.reach} </h2>
            </div>
            <div className="show-fighter-text-name">
                <h1 className="show-fighter-text-fullname">{showFighter.name}</h1>
                <h1 className="show-fighter-text-nickname">Nickname: {showFighter.nickname}</h1>
                <button className="show-fighter-del">Delete</button>
                <button className="show-fighter-update">Update</button>
            </div>
        </div>
    )
}

export default ShowFighter;