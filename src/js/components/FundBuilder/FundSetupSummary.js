import React from 'react'

const SUMMARY_STATEMENT_ORDER = [
  'fundType',
  'deliveryMethod',
  'applicantTypes',
  'capitalSpend',
]

export const FundSetupSummary = ({ summary }) => {
  return (
    <>
      {Object.keys(summary).length ? (
        <>
          <h2>Your Choices</h2>
          {SUMMARY_STATEMENT_ORDER.map((statementKey, idx) => {
            if (statementKey in summary) {
              return <p key={idx}>{summary[statementKey]}</p>
            }
          })}
        </>
      ) : (
        ''
      )}
    </>
  )
}
