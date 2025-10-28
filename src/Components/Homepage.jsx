import React from 'react';
import "../Styles/Homepage.css";

function Homepage({ onSingUpClick }){
return(
<div className="main">
    <div className="main-left">

<h1>SmartAttendance</h1>
<p className="text1">Authorized users only -</p>
<p className="text2">please sign in to access your dashboard.</p>


    </div>
<div className="main-right">
    <div className='box'>
<h1>User Account</h1>
 <form action='' >

 <input className='input'  type ='text' placeholder='User Name'  /> 
  
  <br></br>
 
<input className='input'  type ='password' placeholder='Password' />
 
<br></br>
 <div className='remember'>
<input className='check' type='checkbox' id='remember'/> <label className='checkboxtext' for ='remember' >Remember Me</label>
</div>
<button onClick={onSingUpClick}>Sing Up</button>

 </form>
</div>






</div>


</div>



);
}
export default Homepage ;
