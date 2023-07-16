import React from 'react'

export const ResultsPage = (props) => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='resultscontainer'>
                <div className='col-md-6'>
                    <div className='AnswerTitle'>Correct</div>

                </div>
                <div className='col-md-6'>
                <div className='AnswerTitle'>Incorrect</div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
