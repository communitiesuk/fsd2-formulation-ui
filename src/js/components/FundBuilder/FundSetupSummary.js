import React from 'react'

const SUMMARY_STATEMENT_ORDER = [
  'isCompetitiveFund',
  'deliveryMethod',
  'applicantTypes',
  'capitalSpend',
  'ringfenced',
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
