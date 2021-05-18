import React from 'react'

export const RadioQuestionOption = ({ children, idx, name, value }) => {
  const elementId = `${name}opt${idx}`
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
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
