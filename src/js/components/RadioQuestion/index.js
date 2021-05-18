import React from 'react'

import { RadioQuestionOption } from './RadioQuestionOption'

export const RadioQuestion = ({ children, name, questionText }) => (
  <>
    <p>{questionText}</p>
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

export { RadioQuestionOption }
