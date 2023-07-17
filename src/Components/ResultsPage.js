import React from 'react'

export const ResultsPage = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='resultcontainer'>
                <div className='col-md-6'>
                    <div className='AnswerTitle'>Correct</div>
                    {props.answersCorrect.map((item) => {
                        return(
                        <div className='cardBody' key={item}>
                            {item}
                        </div>)
                    })}
                </div>
                <div className='col-md-6'>
                <div className='AnswerTitle'>Incorrect</div>
                {props.answersIncorrect.map((item) => {
                        return(
                        <div className='cardBody' key={item}>
                            {item}
                        </div>)
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
