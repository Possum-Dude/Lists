import React, { useState } from'react';
import './App.css';
import { quizData, sortedListAnswers } from './Assets/Quiz';
import { Random } from './Utilities/Random';

function App() {

const allData=quizData;
const [gameData, setGameData] = useState({Q:'start',A:'start'});
const [answerData, setAnswerData] = useState(sortedListAnswers);


const onClickHandlerNewGame = () => {
  


let Rand = Random(allData.length);
setGameData({Q:allData[Rand].Q,A:allData[Rand].A});
console.log("gameData ", gameData.Q + " " + gameData.A, Rand);

}


  return (
    <div className="App">

        <button className='buttonSubmit btn btn-default' onClick = {onClickHandlerNewGame} >Choose a Random Question</button>



    </div>
  );
}

export default App;
