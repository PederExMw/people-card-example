import React from 'react'
import './ChangeColor.css'

function changeColor3Sec( ) {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
 
return (
  <div className='main'>  
    <button type='button' id='btn1' onClick={changeColor3Sec}> Change Color Start</button>
  </div>
 
)


function changeColorInterval(props){
 
  let isColorChangeWorking = false ;
  let changeColorIntervalId
  let btn1 = "Change Color Start";

  if(isColorChangeWorking) {
    clearInterval(changeColorInterval)
    isColorChangeWorking = false;
  }
  else {
      changeColorIntervalId = setInterval(changeColor3Sec, 3000)
      btn1 = "Change Color STOP!";
      isColorChangeWorking = true
  }

}
}


export default changeColor3Sec;