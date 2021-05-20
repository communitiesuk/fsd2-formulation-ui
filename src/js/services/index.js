import axios from 'axios'

const appendEvent = (eventType, eventValue, callback) => {
  axios
    .post(`${EVENT_HUB_API_URL}/events/${eventType}`, {
      value: eventValue,
    })
    .then((response) => {
      callback(response.status)
    })
}

export const publishFund = (summary, applicationQuestions, callback) => {
  appendEvent('fundPublished', { summary, applicationQuestions }, (status) => {
    callback(status === 201)
  })
}
