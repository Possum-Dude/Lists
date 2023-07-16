import React, { useState } from'react';
import './App.css';
import { quizData, sortedListAnswers } from './Assets/Quiz';
import { Random } from './Utilities/Random';
import Select from 'react-select';
import { selectCustomStyles } from './Utilities/SelectReactSettings';

function App() {

const allData=quizData;
const [gameData, setGameData] = useState({Q:'start',A:'start'});
const [answerData, setAnswerData] = useState(sortedListAnswers);
const [answer, setAnswer] = useState("");
const [winlose, setWinlose] = useState("");
let answerLet = "";

const onClickHandlerNewGame = () => {
  setWinlose("");
let Rand = Random(allData.length);
setGameData({Q:allData[Rand].Q,A:allData[Rand].A});
console.log("gameData ", gameData.Q + " " + gameData.A);

}

const handleAnswerChange = (e, ) => {
setAnswer(e.value);//this holds the state version we select

    answerLet = e.value;

console.log("AnswerLet ", answerLet + " gameplay Answer " + gameData.A);
winLoseCalc(answerLet);
setWinlose(" " + winLoseCalc(answerLet));
};

const winLoseCalc = (answerLet) => {

  if ( answerLet !== "undefined"){
    if (answerLet === gameData.A) {
      console.log("You Win!");
      return "You Win!";
    } 
    else {
      console.log("You Lose!");
      return "You Lose!";
    }
}
}

  return (
    <div className="App">
      <div className="title">Awesome NZ Quiz</div>
        <div className="Qheader">{gameData.Q}</div>
        <div className="col-sm">
        <button className='buttonSubmit btn btn-default' onClick = {onClickHandlerNewGame} >Choose a Random Question</button>
        </div>

        
    
    <div className='col-sm'>
      <Select
      styles={selectCustomStyles}
      options={answerData}
      className='selectDropDownStyle'
      value={answer}
      onChange={handleAnswerChange}
      placeholder={answer !== ""? answer : "Choose an answer"}
      controlShouldRenderValue={false}
      />
    </div>
    <h4>{answer ? "You selected " + answer + winlose : ""}</h4>
  </div>
  );
}

export default App;
