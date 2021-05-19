import React from 'react'

export const RadioQuestionOption = ({
  children,
  idx,
  name,
  questionNumber,
  value,
}) => {
  const elementId = `${name}opt${idx}`
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          questionnumber={questionNumber}
          id={elementId}
          value={value}
        />
        <label className="form-check-label" htmlFor={elementId}>
          {children}
        </label>
      </div>
    </>
  )
}
