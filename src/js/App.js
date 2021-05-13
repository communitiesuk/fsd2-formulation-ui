import React, { useEffect, useState } from 'react'

import { appendEvent } from './services'

const DummyForm = ({ handleSubmission }) => {
  return (
    <>
      <form onSubmit={handleSubmission}>
        <label htmlFor={'input_someValue'}>Some value:</label>
        <input name={'someValue'} id={'someValue'} />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

const App = () => {
  const [dummySubmission, setDummySubmission] = useState('')
  const [submissionResult, setSubmissionResult] = useState('')

  useEffect(() => {
    if (dummySubmission) {
      appendEvent('dummy', dummySubmission, (status) => {
        setSubmissionResult(status)
        setDummySubmission('')
      })
    }
  }, [dummySubmission])

  const handleDummyFormSubmission = (e) => {
    e.preventDefault()
    const form = e.target
    const someValue = form.someValue.value
    setDummySubmission(someValue)
  }

  return (
    <>
      <h1>Fund Formulation UI (FSD-Proto-2) v0.1</h1>
      <DummyForm handleSubmission={handleDummyFormSubmission} />
      {submissionResult ? <p>Submission result: {submissionResult}</p> : ''}
    </>
  )
}

export default App
