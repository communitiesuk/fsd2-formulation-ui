import React, { useEffect, useReducer, useState } from 'react'

import { RadioQuestion, RadioQuestionOption } from './components/RadioQuestion'

const PROHIBITION_MESSAGE_COMPETITIVE_ONLY =
  'Please do not go any further. This page is for setting up competitive funds only at the moment.'

const fundQuestionsReducer = (questions, { question, choice }) => {
  const newQuestions = { ...questions }
  newQuestions[question] = choice
  return newQuestions
}

const App = () => {
  const [fundQuestions, fundQuestionsDispatch] = useReducer(
    fundQuestionsReducer,
    {}
  )
  const [currentQ, setCurrentQ] = useState(1)
  const [prohibitionMessage, setProhibitionMessage] = useState('')

  const handleFormChange = (e) => {
    fundQuestionsDispatch({ question: e.target.name, choice: e.target.value })
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

  const FundSummary = ({ questions }) => {
    const q1choice = questions.formulateQ1
    return (
      <>
        {q1choice == 'yes' ? (
          <p>
            This is a <b>competitive</b> fund.
          </p>
        ) : (
          ''
        )}
      </>
    )
  }

  return (
    <>
      <h1>Fund Formulation UI (FSD-Proto-2) v0.1</h1>
      <div className={'row'}>
        <div className={'col-md-6'}>
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
        </div>
        <div className={'col-md-6'}>
          <h2>Your Choices</h2>
          <FundSummary questions={fundQuestions} />
        </div>
      </div>
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
