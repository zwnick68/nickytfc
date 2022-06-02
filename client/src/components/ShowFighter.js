import React, {useState, useEffect} from 'react'
function ShowFighter ({fighterName,fighterImage, fighterRanking, fighter_record, fighterAge, fighterHeight, fighterWeight, fighterReach,fighterNickName}) {

    return(
    <div>
        <h1 style={{color: "white", fontSize: "18px"}}>{fighterName}</h1>
        <h1 style={{color: "white", fontSize: "18px"}}>Nickname: {fighterNickName}</h1>
        <img src={fighterImage}/>
        <h2 style={{color: "white", fontSize: "18px"}}>Ranking: { fighterRanking}</h2>
        <h2 style={{color: "white", fontSize: "12px"}}>Record: {fighter_record}</h2>
        <h2 style={{color: "white", fontSize: "12px"}}>Age: {fighterAge}</h2>
        <h2 style={{color: "white", fontSize: "12px"}}>Height: {fighterHeight} in</h2>
        <h2 style={{color: "white", fontSize: "12px"}}>Weight: {fighterWeight} lbs</h2>
        <h2 style={{color: "white", fontSize: "12px"}}>Reach: {fighterReach} </h2>
    </div>
    )
}

export default ShowFighter;