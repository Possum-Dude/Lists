import React, { useState } from'react';
import './App.css';
import { quizData, sortedListAnswers } from './Assets/Quiz';
import { Random } from './Utilities/Random';
import Select from 'react-select';
import { selectCustomStyles } from './Utilities/SelectReactSettings';
import swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import { ResultsPage } from './Components/ResultsPage';

function App() {

const allData=quizData;
const [gameData, setGameData] = useState({Q:'start',A:'start'});
const [answerData, setAnswerData] = useState(sortedListAnswers);
const [answer, setAnswer] = useState("");
const [winlose, setWinlose] = useState("");
const [answersCorrect, setAnswerCorrect] = useState([]);
const [answersIncorrect, setAnswerIncorrect] = useState([]);
const MySwal = withReactContent(swal);
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
      MySwal.fire({
        icon:'success',
        title: 'You Win',
        text: 'the answer is ' + gameData.A,
        footer: 'want to play again?',
        
      })
      setAnswerCorrect([...answersCorrect,  gameData.Q + " is " + answerLet]);
      return;
    } 
    else {
      MySwal.fire({
        icon: "error",
        title: 'You Lose',
        text: 'the anser is ' + gameData.A,
        footer: 'Nice try have another go'
      })
      setAnswerIncorrect([...answersIncorrect, gameData.Q + " is not " + answerLet]);
      return;
    }
}
};
;

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
    {/* <div>{winlose}</div> */}

    <ResultsPage answersCorrect={answersCorrect} answersIncorrect={answersIncorrect} />

  </div>
  );
}

export default App;
