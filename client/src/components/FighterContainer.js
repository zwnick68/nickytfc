
import React,{useState, useEffect} from "react";
import Fighter from "./Fighter.js"
import ShowFighter from "./ShowFighter.js";
function FighterContainer ({fighters}) {
    const[clickedFighter, setClickFighter] = useState(false)

    // function ifClicked(){
    //     if(clickedFighter){
    //         return <ShowFighter fighters={fighters}/>
    //     } else{
    //         return null
    //     }
    // }

    return (
        <div className="fighter-container">
    {
        fighters.map((element) => {
            return <Fighter fighter={element} /> 
        })
    }  
       

    {/* {ifClicked()} */}
    </div>   

    )
}



export default FighterContainer;