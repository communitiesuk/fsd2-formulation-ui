import React, { useReducer, useState } from 'react'

import { publishFund } from '../../services'
import { FundSetupQuestions } from './FundSetupQuestions'
import { FundSetupSummary } from './FundSetupSummary'

const PROHIBITION_MESSAGE_COMPETITIVE_ONLY =
  'Please do not go any further. This page is for setting up competitive funds only at the moment.'

const setupQuestionsReducer = (questions, { question, choice }) => {
  const newQuestions = { ...questions }
  newQuestions[question] = choice
  return newQuestions
}

const setupSummaryReducer = (summary, { question, choice }) => {
  const newSummary = { ...summary }

  switch (question) {
    case 'formulateQ1':
      newSummary['fundType'] =
        choice === 'yes' ? 'This is a competitive fund.' : ''
      break
    case 'formulateQ2':
      newSummary['deliveryMethod'] = `The fund will be delivered by ${choice}.`
      newSummary['applicantTypes'] =
        choice === 'direct award'
          ? 'Applicants can include: Local authorities, charities and businesses.'
          : ''
      break
  }
  return newSummary
}

// const applicationFormReducer = null

export const FundBuilder = () => {
  const [setupQuestions, setupQuestionsDispatch] = useReducer(
    setupQuestionsReducer,
    {}
  )
  const [setupSummary, setupSummaryDispatch] = useReducer(
    setupSummaryReducer,
    {}
  )
  const [currentQ, setCurrentQ] = useState(1)
  const [prohibitionMessage, setProhibitionMessage] = useState('')
  const [publishedMessage, setPublishedMessage] = useState('')

  const handleFormChange = (e) => {
    /* TODO: This would benefit greatly from a migration to (e.g.) Redux or Redux-Sagas
     * wherein a single dispatched event could be picked up and processed by several reducers
     * without the 'publishing' event needing to know.
     *
     * However, on reflection, for a prototype that architecture is too heavyweight and slow
     * to implement so we are going to 'fake it' here by dispatching more than one event at
     * the publication stage.
     */
    setupQuestionsDispatch({
      question: e.target.name,
      choice: e.target.value,
    })
    setupSummaryDispatch({
      question: e.target.name,
      choice: e.target.value,
    })

    if (e.target.name == 'formulateQ1') {
      if (e.target.value == 'no') {
        setProhibitionMessage(PROHIBITION_MESSAGE_COMPETITIVE_ONLY)
        setCurrentQ(1)
        setupQuestionsDispatch({
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
    publishFund(setupSummary, (success) => {
      if (success) {
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
          <FundSetupSummary summary={setupSummary} />
        </div>
      </div>
      {prohibitionMessage ? (
        <div className="alert alert-danger" role="alert">
          {prohibitionMessage}
        </div>
      ) : (
        ''
      )}
      {setupQuestions.formulateQ1 && setupQuestions.formulateQ2 ? (
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
