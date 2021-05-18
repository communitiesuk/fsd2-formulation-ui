import React from 'react'

export const FundSetupSummary = ({ questions }) => {
  const { formulateQ1, formulateQ2 } = questions

  return (
    <>
      {formulateQ1 == 'yes' ? (
        <>
          <h2>Your Choices</h2>
          <p>
            This is a <b>competitive</b> fund.
          </p>

          {formulateQ2 ? (
            <>
              <p>
                The fund will be delivered by <b>{formulateQ2}</b>.
              </p>
              {formulateQ2 == 'direct award' ? (
                <p>
                  Applicants can include: Local authorities, charities and
                  businesses.
                </p>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </>
  )
}
