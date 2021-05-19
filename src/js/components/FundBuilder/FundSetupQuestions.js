import React from 'react'

import { RadioQuestion, RadioQuestionOption } from '../RadioQuestion'

export const FundSetupQuestions = ({
  furthestQ,
  handleFormChange,
  prohibitionMessage,
  showRingfencedQuestion,
}) => {
  return (
    <>
      <h2>Fund Setup - Initial Questions</h2>
      <form onChange={handleFormChange}>
        <RadioQuestion
          name={'isCompetitiveFund'}
          questionNumber={1}
          guidance={
            'Here is some very good guidance on what constitutes a competitive fund.'
          }
          questionText={'Is this a competitive fund?'}
        >
          <RadioQuestionOption value={'yes'}>Yes</RadioQuestionOption>
          <RadioQuestionOption value={'no'}>No</RadioQuestionOption>
        </RadioQuestion>
        {prohibitionMessage ? (
          <div className="alert alert-danger" role="alert">
            {prohibitionMessage}
          </div>
        ) : (
          <>
            {furthestQ >= 1 ? (
              <>
                <RadioQuestion
                  name={'deliveryMethod'}
                  questionNumber={2}
                  guidance={
                    'Guidance concerning the delivery methods for funds.'
                  }
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
            {furthestQ >= 2 ? (
              <>
                <RadioQuestion
                  name={'capitalSpend'}
                  questionNumber={3}
                  guidance={
                    'Guidance concerning what constitutes capital spend.'
                  }
                  questionText={'Does your fund involve capital spend?'}
                >
                  <RadioQuestionOption value={'yes'}>Yes</RadioQuestionOption>
                  <RadioQuestionOption value={'no'}>No</RadioQuestionOption>
                </RadioQuestion>
              </>
            ) : (
              ''
            )}
            {furthestQ >= 3 && showRingfencedQuestion ? (
              <>
                <RadioQuestion
                  name={'ringfenced'}
                  questionNumber={3}
                  guidance={'Guidance concerning what constitutes ringfenced.'}
                  questionText={'Will your fund be ringfenced or unringfenced?'}
                >
                  <RadioQuestionOption value={'ringfenced'}>
                    Ringfenced
                  </RadioQuestionOption>
                  <RadioQuestionOption value={'unringfenced'}>
                    Unringfenced
                  </RadioQuestionOption>
                </RadioQuestion>
              </>
            ) : (
              ''
            )}
          </>
        )}
      </form>
    </>
  )
}
