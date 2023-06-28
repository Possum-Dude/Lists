import React, { useState } from'react';
import './App.css';
import { quizData } from './Assets/Quiz';
import { Random } from './Utilities/Random';

function App() {

const allData=quizData;
const[gameData, setGameData]=useState({Q:'start',A:'start'});



const onClickHandlerNewGame = () => {
  


let Rand = Random(allData.length);
console.log("onClickHandlerNewGame ", Rand);
}


  return (
    <div className="App">

        <button className='buttonSubmit btn btn-default' onClick = {onClickHandlerNewGame} >Choose a Random Question</button>



    </div>
  );
}

export default App;
