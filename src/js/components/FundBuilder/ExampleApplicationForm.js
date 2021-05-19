import React from 'react'

const QUESTION_ORDER = ['strategicFit', 'orgType']

export const ExampleApplicationForm = ({ applicationQuestions }) => {
  return (
    <>
      {Object.keys(applicationQuestions).length ? (
        <>
          <h2>Example Application Form</h2>
          {QUESTION_ORDER.map((questionKey, idx) => {
            if (questionKey in applicationQuestions) {
              const question = applicationQuestions[questionKey]
              return (
                <div key={idx} className={'example-application-question'}>
                  <p>{question.text}</p>
                  {question.options &&
                    question.options.map((option, optIdx) => (
                      <div key={optIdx}>
                        <input
                          name={questionKey}
                          id={`${questionKey}opt${optIdx}`}
                          type={'radio'}
                          value={option.value}
                          disabled
                        />
                        <label htmlFor={`${questionKey}opt${optIdx}`}>
                          {option.text}
                        </label>
                      </div>
                    ))}
                  {question.validationHint ? (
                    <span className={'validation-hint'}>
                      Evaluation: {question.validationHint}
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              )
            }
          })}
        </>
      ) : (
        ''
      )}
    </>
  )
}
