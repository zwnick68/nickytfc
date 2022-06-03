import React, {useState, useEffect} from 'react'
import '../showfighter.css'

function ShowFighter ({fighterName,fighterImage, fighterRanking, fighter_record, fighterAge, fighterHeight, fighterWeight, fighterReach,fighterNickName}) {
    
    return(
        <div className="show-fighter">
            <div className="show-fighter-flex">
                 <img className="show-fighter-img" src={fighterImage}/>
                 <h2 className="show-fighter-text" style={{color: "white", fontSize: "18px"}}>Ranking: { fighterRanking}</h2>
                 <h2 className="show-fighter-text">Record: {fighter_record}</h2>
                 <h2 className="show-fighter-text">Age: {fighterAge}</h2>
                 <h2 className="show-fighter-text">Height: {fighterHeight} in</h2>
                 <h2 className="show-fighter-text">Weight: {fighterWeight} lbs</h2>
                 <h2 className="show-fighter-text">Reach: {fighterReach} </h2>
            </div>
            <div className="show-fighter-text-name">
                <h1 className="show-fighter-text-fullname">{fighterName}</h1>
                <h1 className="show-fighter-text-nickname">Nickname: {fighterNickName}</h1>
                <button className="show-fighter-del">Delete</button>
                <button className="show-fighter-update">Update</button>
            </div>
        </div>
    )
}

export default ShowFighter;