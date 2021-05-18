import React from 'react'

export const FundSetupSummary = ({ questions }) => {
  const q1choice = questions.formulateQ1
  return (
    <>
      {q1choice == 'yes' ? (
        <>
          <h2>Your Choices</h2>
          <p>
            This is a <b>competitive</b> fund.
          </p>
        </>
      ) : (
        ''
      )}
    </>
  )
}
