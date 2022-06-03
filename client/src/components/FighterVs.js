import React, {useState, useEffect} from 'react';
import Fighter from "./Fighter.js" 

function FighterVs({fighter, setVs1,setClickedFighter}){
    const [f, setf] = useState()
 
    const{id,nickname,name,fight_record,age,img,ranking} = fighter

    const  clickFighter = () => {
        
       // setClickedFighter(true)
     }
 
    return(
            <div className="fighter-item2"  >
                <img src={img} class="fighter-img2"/>
            
            </div>
    )
}

export default FighterVs;