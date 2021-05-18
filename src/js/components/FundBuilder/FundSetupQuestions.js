import React from 'react'

import { RadioQuestion, RadioQuestionOption } from '../RadioQuestion'

export const FundSetupQuestions = ({ currentQ, handleFormChange }) => {
  return (
    <>
      <h2>Fund Setup - Initial Questions</h2>
      <form onChange={handleFormChange}>
        <RadioQuestion
          name={'formulateQ1'}
          questionText={'Is this a competitive fund?'}
        >
          <RadioQuestionOption value={'yes'}>Yes</RadioQuestionOption>
          <RadioQuestionOption value={'no'}>No</RadioQuestionOption>
        </RadioQuestion>

        {currentQ >= 2 ? (
          <div>
            <p>How will your fund be delivered?</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="formulateQ2"
                id="formulateQ2opt1"
                value="yes"
              />
              <label className="form-check-label" htmlFor="formulateQ2opt1">
                Intermediary bodies
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="formulateQ2"
                id="formulateQ2opt2"
                value="yes"
              />
              <label className="form-check-label" htmlFor="formulateQ2opt2">
                Direct award
              </label>
            </div>
          </div>
        ) : (
          ''
        )}
      </form>
    </>
  )
}
