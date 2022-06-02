import React from "react";

function Fighter({fighter}){

   const{id,nickname,name,fight_record,age,img,ranking} = fighter

return(
   <div className="fighter-item">
      <img src={img} class="fighter-img"/>
      <h1> {name} </h1>   
         <h3>Ranking: {ranking}</h3>
    </div>
)

}

export default Fighter;