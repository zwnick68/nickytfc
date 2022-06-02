
import React,{useState, useEffect} from "react";
import Fighter from "./Fighter.js"
import ShowFighter from "./ShowFighter.js";
function FighterContainer ({fighters}) {
    const[fighterName, setFighterName] = useState("")
    const[fighterImage, setFighterImage] = useState("")
    const[fighterRanking, setFighterRanking] = useState("")
    const[fighter_record, setFighter_record] = useState("")
    const[fighterAge, setFighterAge] = useState("")
    const[fighterHeight, setFighterHeight] = useState("")
    const[fighterWeight, setFighterWeight] = useState("")
    const[fighterReach, setFighterReach] = useState("")
    const[fighterNickName, setFighterNickName] = useState("")
    const[clickedFighter, setClickFighter] = useState(false)

    function ifClicked(){
        if(clickedFighter){
            return <ShowFighter fighterName={fighterName} fighterImage={fighterImage} fighterRanking={fighterRanking} fighter_record={fighter_record} fighterAge={fighterAge} fighterHeight={fighterHeight} fighterWeight={fighterWeight} fighterReach={fighterReach} fighterNickName={fighterNickName}/>
        } else{
            return null
        }
    }

    return (
        <div className="fighter-container">
    {
        fighters.map((element) => {
            return <Fighter key={element.id} fighter={element} setFighterName={setFighterName} setFighterImage={setFighterImage} setFighterRanking={setFighterRanking} setFighter_record={setFighter_record} setFighterAge={setFighterAge} setFighterHeight={setFighterHeight} setFighterWeight={setFighterWeight} setFighterReach={setFighterReach} setFighterNickName={setFighterNickName} setClickFighter={setClickFighter}/> 
        })
    }  
       

    {ifClicked()}
    </div>   

    )
}



export default FighterContainer;