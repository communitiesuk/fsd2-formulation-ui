import React, { useReducer, useState } from 'react'

import { publishFund } from '../../services'

import {
  applicationQuestionsReducer,
  furthestQReducer,
  setupResponsesReducer,
  setupSummaryReducer,
} from '../../reducers'

import { ExampleApplicationForm } from './ExampleApplicationForm'
import { FundSetupQuestions } from './FundSetupQuestions'
import { FundSetupSummary } from './FundSetupSummary'

const PROHIBITION_MESSAGE_COMPETITIVE_ONLY =
  'Please do not go any further. This page is for setting up competitive funds only at the moment.'

export const FundBuilder = () => {
  const [furthestQ, furthestQDispatch] = useReducer(furthestQReducer, 0)

  const [setupResponses, setupResponsesDispatch] = useReducer(
    setupResponsesReducer,
    {}
  )
  const [setupSummary, setupSummaryDispatch] = useReducer(
    setupSummaryReducer,
    {}
  )
  const [applicationQuestionsState, applicationQuestionsDispatch] = useReducer(
    applicationQuestionsReducer,
    {}
  )

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
    const eventBody = {
      questionNumber: e.target.getAttribute('questionnumber'),
      question: e.target.name,
      choice: e.target.value,
    }
    furthestQDispatch(eventBody)
    setupResponsesDispatch(eventBody)
    setupSummaryDispatch(eventBody)
    applicationQuestionsDispatch(eventBody)

    if (e.target.name == 'isCompetitiveFund') {
      if (e.target.value == 'no') {
        setProhibitionMessage(PROHIBITION_MESSAGE_COMPETITIVE_ONLY)
        setupResponsesDispatch({
          question: 'deliveryMethod',
          choice: null,
        })
      } else {
        setProhibitionMessage('')
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
            furthestQ={furthestQ}
            handleFormChange={handleFormChange}
            prohibitionMessage={prohibitionMessage}
            showRingfencedQuestion={
              setupResponses.deliveryMethod === 'intermediary bodies'
            }
          />
        </div>
        <div className={'col-md-6'}>
          <div>
            <FundSetupSummary summary={setupSummary} />
          </div>
          <div>
            <ExampleApplicationForm
              applicationQuestions={
                applicationQuestionsState.applicationQuestions
              }
            />
          </div>
        </div>
      </div>
      {setupResponses.isCompetitiveFund && setupResponses.deliveryMethod ? (
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
