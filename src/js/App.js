import React, { useEffect, useState } from 'react'

import { appendEvent, getEvents } from './services'

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
  const [events, setEvents] = useState([])
  const [fetchEvents, setFetchEvents] = useState(false)
  const [submissionResult, setSubmissionResult] = useState('')

  useEffect(() => {
    if (dummySubmission) {
      appendEvent('dummy', dummySubmission, (status) => {
        setSubmissionResult(status)
        setDummySubmission('')
      })
    }
  }, [dummySubmission])

  useEffect(() => {
    if (fetchEvents) {
      getEvents('dummy', (data) => {
        setEvents(data.events)
        setFetchEvents(false)
      })
    }
  }, [fetchEvents])

  const handleDummyFormSubmission = (e) => {
    e.preventDefault()
    const form = e.target
    const someValue = form.someValue.value
    setDummySubmission(someValue)
  }

  const handleGetEventClick = () => {
    setFetchEvents(true)
  }

  return (
    <>
      <h1>Fund Formulation UI (FSD-Proto-2) v0.1</h1>
      <h2>Appending an Event</h2>
      <DummyForm handleSubmission={handleDummyFormSubmission} />
      {submissionResult ? <p>Submission result: {submissionResult}</p> : ''}

      <h2>Reading back Events</h2>
      <button onClick={handleGetEventClick}>Get Events</button>
      <h3>Events</h3>
      <ul>
        {events.length
          ? events.map((event, idx) => (
              <li key={idx}>
                {event.seq}: {event.data}
              </li>
            ))
          : ''}
      </ul>
    </>
  )
}

export default App
