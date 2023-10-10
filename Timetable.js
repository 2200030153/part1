// Timetable.js

import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function Timetable() {
  const htmlContent = `
  <html>
  <head><title>Timetable</title></head>
  <body>
  <center><h1>TIMETABLE</h1></center>
  <table border="5" align="center" cellspacing="0">
      <tr>
          <td width="100" height="50" align="center"> <br><b> Day/Period</b></br></td>
          <td width="100" height="50" align="center"> <b>I</b><br><b>9.30 to 10.20</b></br></td>	
          <td width="100" height="50" align="center"> <b>II</b><br><b>10.20 to 11.10</b></br></td>
          <td width="100" height="50" align="center"> <b>III</b><br><b>11.10 to 12.00</b></br></td>
          <td width="100" height="50" align="center"> <b>12.00 to 12.40</b></td>
          <td width="100" height="50" align="center"> <b>IV</b><br><b>12.40 to 1.30</b></br></td>	
          <td width="100" height="50" align="center"> <b>V</b><br><b>1.30 to 2.20</b></br></td>
          <td width="100" height="50" align="center"> <b>I</b><br><b>2.20 to 3.10</b></br></td>
          <td width="100" height="50" align="center"> <b>I</b><br><b>3.10 to 4.00</b></br></td>
  
      </tr>
      <tr>
          <td width="100" height="50" align="center"> <b>Monday</b></td>
          <td width="100" height="50" align="center"> Eng</td>
          <td width="100" height="50" align="center"> Mat</td>
          <td width="100" height="50" align="center"> Che</td>
          <td rowspan="6" width="100" height="50" align="center"> 
          <b>L</b><br>
          <b>U</b><br>
          <b>N</b><br>
          <b>C</b><br>
          <b>H</b></td>
          <td colspan="3" width="100" height="50" align="center"> LAB</td>
          <td width="100" height="50" align="center"> Phy</td>
      </tr>
      <tr>
          <td width="100" height="50" align="center"> <b>Tuesday</b></td>
          <td colspan="3" width="100" height="50" align="center"> LAB </tb>
          <td width="100" height="50" align="center"> Eng </tb>
          <td width="100" height="50" align="center"> Che </tb>
          <td width="100" height="50" align="center"> Mat</tb>
          <td width="100" height="50" align="center"> Sports </tb>
      </tr>
      <tr>
          <td width="100" height="50" align="center"> <b>Wednesday</b></td>
          <td width="100" height="50" align="center"> Mat</tb>
          <td width="100" height="50" align="center"> Phy</td>
          <td width="100" height="50" align="center"> Eng</td>
          <td width="100" height="50" align="center"> Che</td>
          <td colspan="3" width="100" height="50" align="center"> LIBRARY </tb>
      </tr>
      <tr>
          <td width="100" height="50" align="center"> <b>Thursday</b></td>
          <td width="100" height="50" align="center"> Phy</td>	
          <td width="100" height="50" align="center"> Eng</td>
          <td width="100" height="50" align="center"> Che</td>
          <td colspan="3" width="100" height="50" align="center"> LAB </tb>
          <td width="100" height="50" align="center"> Mat</tb>
      </tr>
      <tr>
          <td width="100" height="50" align="center"> <b>Friday</b></td>
          <td colspan="3" width="100" height="50" align="center"> LAB </tb>
          <td width="100" height="50" align="center"> Mat</tb>
          <td width="100" height="50" align="center"> Che</td>
          <td width="100" height="50" align="center"> Eng</td>
          <td width="100" height="50" align="center"> Phy</td>
      </tr>
      <tr>
          <td width="100" height="50" align="center"> <b>Saturday</b></td>
          <td width="100" height="50" align="center"> Eng</td>
          <td width="100" height="50" align="center"> Che</td>
          <td width="100" height="50" align="center"> Mat</tb>
          <td colspan="3" width="100" height="50" align="center">SEMINAR</tb>		
          <td width="100" height="50" align="center"> Sports </tb>
      </tr>
  
  </table>
  
  </body>
  </html>
  `;

  return (
    <div>
      {ReactHtmlParser(htmlContent)}
    </div>
  );
}

export default Timetable;
