import React, { useReducer, useState } from 'react'

import { appendEvent } from '../../services'
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
  const [publishedMessage, setPublishedMessage] = useState('')

  const handleFormChange = (e) => {
    fundSetupQuestionsDispatch({
      question: e.target.name,
      choice: e.target.value,
    })
    if (e.target.name == 'formulateQ1') {
      if (e.target.value == 'no') {
        setProhibitionMessage(PROHIBITION_MESSAGE_COMPETITIVE_ONLY)
        setCurrentQ(1)
        fundSetupQuestionsDispatch({
          question: 'formulateQ2',
          choice: null,
        })
      } else {
        setProhibitionMessage('')
        setCurrentQ(2)
      }
    }
  }

  const handlePublishClick = () => {
    appendEvent('fundPublished', fundSetupQuestions, (status) => {
      if (status == '201') {
        setPublishedMessage('Fund was published.')
      }
    })
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
      {fundSetupQuestions.formulateQ1 && fundSetupQuestions.formulateQ2 ? (
        <>
          <button
            type="button"
            className="btn btn-success"
            onClick={handlePublishClick}
          >
            Publish Fund
          </button>
          {publishedMessage}
        </>
      ) : (
        ''
      )}
    </>
  )
}
