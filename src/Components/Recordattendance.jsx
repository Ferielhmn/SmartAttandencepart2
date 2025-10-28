
import React, { useState } from 'react';

import "../Styles/Recordeattendance.css";

function Recordattendence({onBackClick}){

const [Absences1,setAbsences1]=useState(0);
const [Participation1,setPartitipation1]=useState(0);
const [Absences2,setAbsences2]=useState(0);
const [Participation2,setPartitipation2]=useState(0);
const [Absences3,setAbsences3]=useState(0);
const [Participation3,setPartitipation3]=useState(0);
const [Absences4,setAbsences4]=useState(0);
const [Participation4,setPartitipation4]=useState(0);

function handelAbsense(student,checked){
    if (student===1)setAbsences1(prev => prev + (checked ? 1:-1))
        else if (student===2) setAbsences2(prev => prev + (checked ? 1:-1))
    else if (student===3) setAbsences3(prev => prev + (checked ? 1:-1))
else if (student===4) setAbsences4(prev => prev + (checked ? 1:-1))

 }

 function handelParticipation(student,checked){
 if (student===1)setPartitipation1(prev => prev + (checked ? 1:-1))
        else if (student===2) setPartitipation2(prev => prev + (checked ? 1:-1))
    else if (student===3) setPartitipation3(prev => prev + (checked ? 1:-1))
else if (student===4) setPartitipation4(prev => prev + (checked ? 1:-1))

 }

    return(
        <div className='main'>
        <div className="navBar">
            <div className="nav-left">
                <h1>Attendance System</h1>
            </div>
            <div className="nav-right">
                <button onClick={onBackClick} >SingUp</button>
            </div>
        </div>

<div className='mainy'>
    <div className='title-main'>
      <h1>Students Attendance List - session date : 28/10/2025</h1>
    </div>

<table className="hello">
 <thead>
  <tr>
    <th scope="col" className="oneligne"> Last Name</th>
    <th scope="col" className="oneligne">First Name</th>
    <th scope="col" colspan="2" className="oneligne"> S1</th>
    <th scope="col" colspan="2" className="oneligne"> S2</th>
    <th scope="col" colspan="2" className="oneligne"> S3</th>
    <th scope="col" colspan="2" className="oneligne"> S4</th>
    <th scope="col" colspan="2" className="oneligne"> S5</th>
    <th scope="col" colspan="2" className="oneligne"> S6</th>
    <th scope="col" className="oneligne">Absences </th>
    <th scope="col" className="oneligne"> Participation</th>

  </tr>

  <tr>
    <th></th>
    <th></th>
    <th scope="col" className="oneligne">P</th>
    <th scope="col" className="oneligne">Pa</th>
    <th scope="col" className="oneligne">P</th>
    <th scope="col" className="oneligne">Pa</th>
    <th scope="col" className="oneligne">P</th>
    <th scope="col" className="oneligne">Pa</th>
    <th scope="col" className="oneligne">P</th>
    <th scope="col" className="oneligne">Pa</th>
    <th scope="col" className="oneligne">P</th>
    <th scope="col" className="oneligne">Pa</th>
    <th scope="col" className="oneligne">P</th>
    <th scope="col" className="oneligne">Pa</th>
    <th scope="col"></th>
    <th scope="col"></th>

  </tr>
</thead>
<tbody>
  <tr >
    <td className="design-text">Ahmed</td>
    <td className="design-text">Sara</td>
   <td className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelAbsense(1,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"onChange={(e) => handelParticipation(1,e.target.checked)}/> </td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(1,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(1,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(1,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelParticipation(1,e.target.checked)} /></td>
    <td   className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelAbsense(1,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox" onChange={(e) => handelParticipation(1,e.target.checked)}/></td>
    <td   className="firstinput">
    <input  type="checkbox" onChange={(e) =>  handelAbsense(1,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelParticipation(1,e.target.checked)}/></td>
    <td  className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelAbsense(1,e.target.checked)}/></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(1,e.target.checked)}/></td>
    <td  className="design-text">{Absences1} Abs</td>
    <td className="design-text">{Participation1} Par</td>

  </tr>

  <tr>
    <td className="design-text">Dooky</td>
    <td className="design-text">Timoty</td>
   <td className="firstinput">
      <input  type="checkbox"  onChange={(e) =>  handelAbsense(2,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"onChange={(e) => handelParticipation(2,e.target.checked)}/> </td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(2,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(2,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(2,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelParticipation(2,e.target.checked)} /></td>
    <td   className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelAbsense(2,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox" onChange={(e) => handelParticipation(2,e.target.checked)}/></td>
    <td   className="firstinput">
    <input  type="checkbox" onChange={(e) =>  handelAbsense(2,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelParticipation(2,e.target.checked)}/></td>
    <td  className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelAbsense(2,e.target.checked)}/></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(2,e.target.checked)}/></td>
    <td className="design-text">{Absences2} Abs</td>
    <td className="design-text">{Participation2} Par</td>
    
  </tr>


  <tr>
    <td className="design-text">Kati</td>
    <td className="design-text">Yasmine</td>
   <td className="firstinput">
   <input  type="checkbox"  onChange={(e) =>  handelAbsense(3,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"onChange={(e) => handelParticipation(3,e.target.checked)}/> </td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(3,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(3,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(3,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelParticipation(3,e.target.checked)} /></td>
    <td   className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelAbsense(3,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox" onChange={(e) => handelParticipation(3,e.target.checked)}/></td>
    <td   className="firstinput">
    <input  type="checkbox" onChange={(e) =>  handelAbsense(3,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelParticipation(3,e.target.checked)}/></td>
    <td  className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelAbsense(3,e.target.checked)}/></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(3,e.target.checked)}/></td>
    <td className="design-text">{Absences3} Abs</td>
    <td className="design-text">{Participation3} Par</td>
    
  </tr>

  <tr>
    <td className="design-text">Bonny</td>
    <td className="design-text">Kathrine</td>
   <td className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelAbsense(4,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"onChange={(e) => handelParticipation(4,e.target.checked)}/> </td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(4,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(4,e.target.checked)} /></td>
    <td className="firstinput">
    <input type="checkbox" onChange={(e) =>  handelAbsense(4,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelParticipation(4,e.target.checked)} /></td>
    <td   className="firstinput">
    <input  type="checkbox"  onChange={(e) =>  handelAbsense(4,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox" onChange={(e) => handelParticipation(4,e.target.checked)}/></td>
    <td   className="firstinput">
    <input  type="checkbox" onChange={(e) =>  handelAbsense(4,e.target.checked)}/></td>
    <td className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelParticipation(4,e.target.checked)}/></td>
    <td  className="firstinput">
    <input  type="checkbox"  onChange={(e) => handelAbsense(4,e.target.checked)}/></td>
    <td className="firstinput">
    <input type="checkbox"   onChange={(e) =>  handelParticipation(4,e.target.checked)}/></td>
    <td className="design-text">{Absences4} Abs</td>
    <td className="design-text">{Participation4} Par</td>
    
  </tr>
</tbody>
</table>
</div>
</div>
 );
};
export default Recordattendence;