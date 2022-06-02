import React from "react";

function Fighter({fighter}){

   const{id,nickname,name,fight_record,age,img} = fighter

return(
   <div className="fighter-item">
      <img src={img} class="fighter-img"/>
      <h1> {name} </h1>      
    </div>
)

}

export default Fighter;