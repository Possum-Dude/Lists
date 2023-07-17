import React from 'react'
let keyIncrement = 0;
export const ResultsPage = (props) => {
    keyIncrement ++;
  return (
    <div className='container'>
        <div className='row'>
            <div className='resultcontainer'>
                <div className='col-md-6'>
                    <div className='appheadermeaningtext'>Correct</div>
                    {props.answersCorrect.map((item) => {
                        return(
                        <div className='cardBody' key={item + keyIncrement}>
                            {item}
                        </div>)
                    })}
                </div>
                <div className='col-md-6'>
                <div className='appheadermeaningtext'>Incorrect</div>
                {props.answersIncorrect.map((item) => {
                        return(
                        <div className='cardBody' key={item + keyIncrement}>
                            {item}
                        </div>)
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
