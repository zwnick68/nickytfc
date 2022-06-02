import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';


function HomePage() {
    

    return(
        <div className='homepageclass'>
             <div class="topdiv"> Elite Fighter Analytics </div>
            <Login/>
            <SignUp/> 
            <img className="home-image" src="https://wallpaperaccess.com/full/4487462.jpg" height="800px"/>  
            
            
       </div>
        
    );
}

export default HomePage;