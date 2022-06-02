
import React from "react";
import Fighter from "./Fighter.js"
function FighterContainer ({fighters}) {
    return (
        <div className="fighter-container">
    {
        fighters.map((element) => {
            return <Fighter key={element.id} fighter={element}  /> 
        })
     
    }    
    
    </div>   

    )
}



export default FighterContainer;