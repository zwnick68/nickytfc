
import React from "react";
import Fighter from "./Fighter.js"
function FighterContainer ({fighters}) {
    return (
        <div>
    {
        fighters.map((element) => {
            return <Fighter fighter={element}  /> 
        })
     
    }    
    
    </div>   

    )
}



export default FighterContainer;