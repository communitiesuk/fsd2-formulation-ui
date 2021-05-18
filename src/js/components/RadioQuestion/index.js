import React, { useState } from 'react'

import { RadioQuestionOption } from './RadioQuestionOption'

const Guidance = ({ guidance }) => (
  <>
    <div className="alert alert-info" role="alert">
      <p>{guidance}</p>
    </div>
  </>
)

export const RadioQuestion = ({ children, guidance, name, questionText }) => {
  const [showGuidance, setShowGuidance] = useState(false)

  const handleGuidanceLinkClick = (e) => {
    e.preventDefault()
    setShowGuidance(!showGuidance)
  }

  return (
    <>
      <p>
        {questionText}{' '}
        <a
          className={'setup-question-guidance'}
          onClick={handleGuidanceLinkClick}
        >
          Guidance
        </a>{' '}
      </p>
      {showGuidance ? <Guidance guidance={guidance} /> : ''}
      {React.Children.map(children, (child, idx) => {
        if (child.type === RadioQuestionOption) {
          return React.cloneElement(child, {
            idx,
            name,
          })
        }
      })}
    </>
  )
}

export { RadioQuestionOption }
