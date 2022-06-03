
import React, {useState, useEffect} from 'react';
import FighterVs from "./FighterVs.js"
import Vs1 from './Vs1.js';

function VsPage(){

    const [getID, setGetID] = useState(0)
    const [data, setData] = useState([])
    const[clickedFighter, setClickedFighter] = useState(false)
    const [Vs1, setVs1] = useState({})

    let request= async()=>{
        let req = await fetch('/fighters')
        let res = await req.json()
          setData(res)
        }
        
        useEffect(() => {
          request()
        }, [])

return(
   <div className="VsPage">
     <div className="vscontainer">
     {data.map((element) => {
      
            return <FighterVs key={element.id} fighter={element} setClickedFighter={setClickedFighter}/> 

        })}

    </div>

    

   

    </div>
)

}

export default VsPage;