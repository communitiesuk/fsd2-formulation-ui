import React from 'react'

import { RadioQuestion, RadioQuestionOption } from '../RadioQuestion'

export const FundSetupQuestions = ({ currentQ, handleFormChange }) => {
  return (
    <>
      <h2>Fund Setup - Initial Questions</h2>
      <form onChange={handleFormChange}>
        <RadioQuestion
          name={'formulateQ1'}
          guidance={
            'Here is some very good guidance on what constitutes a competitive fund.'
          }
          questionText={'Is this a competitive fund?'}
        >
          <RadioQuestionOption value={'yes'}>Yes</RadioQuestionOption>
          <RadioQuestionOption value={'no'}>No</RadioQuestionOption>
        </RadioQuestion>

        {currentQ >= 2 ? (
          <>
            <RadioQuestion
              name={'formulateQ2'}
              guidance={'Guidance concerning the delivery methods for funds.'}
              questionText={'How will your fund be delivered?'}
            >
              <RadioQuestionOption value={'intermediary bodies'}>
                Intermediary Bodies
              </RadioQuestionOption>
              <RadioQuestionOption value={'direct award'}>
                Direct award
              </RadioQuestionOption>
            </RadioQuestion>
          </>
        ) : (
          ''
        )}
      </form>
    </>
  )
}
