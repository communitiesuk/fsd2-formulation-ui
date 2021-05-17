import React, { useEffect, useState } from 'react'

const PROHIBITION_MESSAGE_COMPETITIVE_ONLY =
  'Please do not go any further. This page is for setting up competitive funds only at the moment.'

const App = () => {
  const [prohibitionMessage, setProhibitionMessage] = useState('')

  const handleFormChange = (e) => {
    if (e.target.name == 'formulateQ1') {
      if (e.target.value == 'no') {
        setProhibitionMessage(PROHIBITION_MESSAGE_COMPETITIVE_ONLY)
      } else {
        setProhibitionMessage('')
      }
    }
  }

  return (
    <>
      <h1>Fund Formulation UI (FSD-Proto-2) v0.1</h1>
      <h2>Fund Setup - Initial Questions</h2>
      <form onChange={handleFormChange}>
        <p>Is this a competitive fund?</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="formulateQ1"
            id="formulateQ1yes"
            value="yes"
          />
          <label className="form-check-label" htmlFor="formulateQ1yes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="formulateQ1"
            id="formulateQ1no"
            value="no"
          />
          <label className="form-check-label" htmlFor="formulateQ1no">
            No
          </label>
        </div>
      </form>
      {prohibitionMessage ? (
        <div className="alert alert-danger" role="alert">
          {prohibitionMessage}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default App
