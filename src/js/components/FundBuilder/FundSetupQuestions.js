import React from 'react'

import { RadioQuestion, RadioQuestionOption } from '../RadioQuestion'

const setupQuestions = [
  {
    name: 'isCompetitiveFund',
    questionNumber: 1,
    questionText: 'Is this a competitive fund?',
    designerGuidanceNotes:
      'Here is some very good guidance on what constitutes a competitive fund.',
    options: [
      { value: 'yes', text: 'Yes' },
      { value: 'no', text: 'No' },
    ],
  },
  {
    name: 'deliveryMethod',
    questionNumber: 2,
    questionText: 'How will your fund be delivered?',
    designerGuidanceNotes:
      'Guidance concerning the delivery methods for funds.',
    options: [
      { value: 'intermediary bodies', text: 'Intermediary bodies' },
      { value: 'direct award', text: 'Direct award' },
    ],
  },
  {
    name: 'capitalSpend',
    questionNumber: 3,
    questionText: 'Does your fund involve capital spend?',
    designerGuidanceNotes:
      'Guidance concerning what constitutes capital spend.',
    options: [
      { value: 'yes', text: 'Yes' },
      { value: 'no', text: 'No' },
    ],
  },
  {
    name: 'ringfenced',
    questionNumber: 4,
    questionText: 'Will your fund be ringfenced or unringfenced?',
    designerGuidanceNotes: 'Guidance concerning what constitutes ringfenced.',
    options: [
      { value: 'ringfenced', text: 'Ringfenced' },
      { value: 'unringfenced', text: 'Unringfenced' },
    ],
  },
]

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
        {setupQuestions.map(
          (
            {
              name,
              questionNumber,
              questionText,
              designerGuidanceNotes,
              options,
            },
            idx
          ) => {
            if (
              name === 'isCompetitiveFund' || // always show this
              (!prohibitionMessage &&
                (furthestQ >= questionNumber - 1 ||
                  (name === 'ringfenced' && showRingfencedQuestion)))
            ) {
              return (
                <div key={idx}>
                  <RadioQuestion
                    name={name}
                    questionNumber={questionNumber}
                    questionText={questionText}
                    guidance={designerGuidanceNotes}
                  >
                    {options.map(({ value, text }, optIdx) => (
                      <RadioQuestionOption key={optIdx} value={value}>
                        {text}
                      </RadioQuestionOption>
                    ))}
                  </RadioQuestion>
                  {prohibitionMessage ? (
                    <div className="alert alert-danger" role="alert">
                      {prohibitionMessage}
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              )
            }
          }
        )}
      </form>
    </>
  )
}
