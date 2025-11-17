import React from 'react';
import "../Styles/Welcome.css"
import studenticon from "../Icons/studenticon.png";
function Welcome({onSingUpClick}){
return(
<div className='welcome'>
<div className='loginapp'>
    <h1 className='firsttitle'>Welcome To SmartAttandencs</h1>
    <p className='secondtitle'> LET ACCESS ALL WORK FROM HERE</p>
    <button className ='loginbutton' onClick={onSingUpClick}>Login</button>
    <br></br>

 <img src={studenticon} alt="students"className='photo' width="260px" height="220px" />
</div>
</div>


)


}export default Welcome;