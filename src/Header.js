import React, { useState } from 'react'
import './Header.css';
import bootstrape from 'bootstrap'

function Header() {
//  const [num, setNum] = useState(0);

//  function for refresh-button
 function refreshPage(){
   window.location.reload(false);
 }

 function getRandomNumber(max,min){
    let whole = Math.floor(Math.random() * (max - min +1)) + min;
    return whole;
 }
 const correctNumber =   getRandomNumber(1, 100);
 console.log(correctNumber);

 const handleClick =() => {
    //guessNumber as a input
    let guessNumber = document.getElementById("giveInput").value;
    //displayResult
    displayResult(guessNumber);
    //saveHistory
    saveGuessHistory(guessNumber);
    //displayHistory
    displayHistory();
}

 //function for displayHistory
 function displayResult(guessNumber)
{
  if(guessNumber > correctNumber){
     showAbove();
  } 
  else if(guessNumber < correctNumber){
      showBelow();
}
   else if(guessNumber = correctNumber){
      showYouWon();
   }
}

//function for dialog box presentation of dispalyResult
function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "warning-high":
            dialog = "<div class='alert alert-danger' role='alert'>"
            break;
        case "warning-low":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
            case "won":
                dialog = "<div class='alert alert-success' role='alert'>"
                break;
       }
             dialog += text;
            dialog += "</div>"
            return dialog;    
    
 }

//function for passing the condition
 function showAbove(){
    const text = "Oh Hoo... too high";
    let dialog = getDialog("warning-high", text);
    document.getElementById('result').innerHTML = dialog;
 }
 function showBelow(){
    const text = "Oh Hoo... too low";
    let dialog = getDialog("warning-low", text);
    document.getElementById("result").innerHTML = dialog;
 }
 function showYouWon(){
    const text = "Awesome... You got it!";
    let dialog = getDialog("won",text);
    document.getElementById("result").innerHTML = dialog;
 }

 //array for history
  let addGuess = [];

  //function for save history
  function saveGuessHistory(newGuess){
  
    addGuess.push(newGuess);
  }

  //function-display save history
function displayHistory(){
    let index = addGuess.length -1;
    let list = "<ul class='list-group'>";
    while(index >=0){
         list += "<li class='list-group-item list-group-item-warning'>" + 'Your Guess Number' + " " + addGuess[index] + "</li>";
         index--;
         
         }
         list += '</ul>';
  document.getElementById("history").innerHTML = list;
        }

//  //function for restart
//  function initGame(){
//     //Reset (dialog-box)
//     let guessNumber = document.getElementById("giveInput").value = " ";
//     //Reset correct-number
// //  Math.floor(Math.random()) ;
//     //displayResult
//       document.getElementById('result').innerHTML = " ";
//    //Reset the guessHistory array
//    document.getElementById("history").innerHTML = "";

//    //Reset diaplay-History
//     //   displayHistory();
    
// }




 
  return (
    <div className='header'>
        <div className="header_container">
     <h1>Guess Number Game</h1> 
     </div>

    <div className="title"><h3> Number between 1-100</h3></div>
     <div className="input_container">
        <input
        className='your_input'
        id='giveInput'
         type="number"  placeholder="what's your number?" />
     </div>
     <div id="result">
       {/* display result goes here */}
     </div>
     <div className="button">
        <button 
        
        onClick={handleClick}
        className="submit_btn">PlayGame</button>
       
        <button 
        onClick={refreshPage}
        className="restart_btn">Restart</button>
        <div id="history">
            {/* historyDisplay goes here */}
        </div>
     </div>
    
    </div>

  )
}

export default Header
