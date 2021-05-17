import React, { useEffect, useState } from 'react'

const App = () => {
  return (
    <>
      <h1>Fund Formulation UI (FSD-Proto-2) v0.1</h1>
      <h2>Fund Setup - Initial Questions</h2>
      <form>
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
    </>
  )
}

export default App
