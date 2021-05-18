import React, { useEffect, useState } from 'react'

import { RadioQuestion, RadioQuestionOption } from './components/RadioQuestion'

const PROHIBITION_MESSAGE_COMPETITIVE_ONLY =
  'Please do not go any further. This page is for setting up competitive funds only at the moment.'

const App = () => {
  const [currentQ, setCurrentQ] = useState(1)
  const [prohibitionMessage, setProhibitionMessage] = useState('')

  const handleFormChange = (e) => {
    if (e.target.name == 'formulateQ1') {
      if (e.target.value == 'no') {
        setProhibitionMessage(PROHIBITION_MESSAGE_COMPETITIVE_ONLY)
        setCurrentQ(1)
      } else {
        setProhibitionMessage('')
        setCurrentQ(2)
      }
    }
  }

  return (
    <>
      <h1>Fund Formulation UI (FSD-Proto-2) v0.1</h1>
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
      {prohibitionMessage ? (
        <div className="alert alert-danger" role="alert">
          {prohibitionMessage}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default App
