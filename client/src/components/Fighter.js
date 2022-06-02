import React,{useState,useEffect} from "react";

function Fighter({fighter,setFighterName, setFighterImage, setFighterRanking, setFighter_record,setFighterAge, setFighterHeight, setFighterWeight,setFighterReach, setFighterNickName, setClickFighter}){

   const{id,nickname,name,fight_record,age,img,ranking, height,weight,reach} = fighter
   const  clickFighter = () => {
      setFighterName(name)
      setFighterImage(img)
      setFighterRanking(ranking)
      setFighter_record(fight_record)
      setFighterAge(age)
      setFighterHeight(height)
      setFighterWeight(weight)
      setFighterReach(reach)
      setFighterNickName(nickname)
      setClickFighter(true)
   }

return(
   <div className="fighter-item" onClick={clickFighter}>
      <img src={img} class="fighter-img"/>
      <h1> {name} </h1>   
         <h3>Ranking: {ranking}</h3>
    </div>
)

}

export default Fighter;