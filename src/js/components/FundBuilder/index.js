import React, { useReducer, useState } from 'react'

import { FundSetupQuestions } from './FundSetupQuestions'
import { FundSetupSummary } from './FundSetupSummary'

const PROHIBITION_MESSAGE_COMPETITIVE_ONLY =
  'Please do not go any further. This page is for setting up competitive funds only at the moment.'

const fundSetupQuestionsReducer = (questions, { question, choice }) => {
  const newQuestions = { ...questions }
  newQuestions[question] = choice
  return newQuestions
}

export const FundBuilder = () => {
  const [fundSetupQuestions, fundSetupQuestionsDispatch] = useReducer(
    fundSetupQuestionsReducer,
    {}
  )
  const [currentQ, setCurrentQ] = useState(1)
  const [prohibitionMessage, setProhibitionMessage] = useState('')

  const handleFormChange = (e) => {
    fundSetupQuestionsDispatch({
      question: e.target.name,
      choice: e.target.value,
    })
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
      <div className={'row'}>
        <div className={'col-md-6'}>
          <FundSetupQuestions
            currentQ={currentQ}
            handleFormChange={handleFormChange}
          />
        </div>
        <div className={'col-md-6'}>
          <FundSetupSummary questions={fundSetupQuestions} />
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
