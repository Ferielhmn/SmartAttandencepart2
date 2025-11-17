import React from 'react';
import "../Styles/Homepage.css";
import loginiconremo from "../Icons/loginiconremo.png";

function Homepage({ onSingUpClick }){
return(
<div className="main">
    <div className="main-top">

<h1>SmartAttendance</h1>
<p className="text1">Authorized users only</p>



    </div>
<div className="main-buttom">
    <div className='box'>
<h1>User Account</h1>
 <form action='' >

 <select className='input'>
  <option value="">Student</option>
  <option value="student">Student</option>
  <option value="administration">Administrator</option>
  <option value="teacher">Teacher</option>
</select>
  
  <br></br>
  <input className='input'  type ='nember' placeholder='ID User' />
 <br></br>
<input className='input'  type ='text' placeholder='First Name' />
 
<br></br>
<input className='input'  type ='text' placeholder='Last Name' />
<br></br>

<button onClick={onSingUpClick}>Sing Up</button>
 <img src={loginiconremo} alt="students"className='photopi'width="150px" height="90px"  />

 </form>
</div>






</div>


</div>



);
}
export default Homepage ;
