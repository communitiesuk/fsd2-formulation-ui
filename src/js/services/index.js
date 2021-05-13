import axios from 'axios'

export const appendEvent = (eventType, eventValue, callback) => {
  axios
    .post(`${EVENT_HUB_HOST}/events/${eventType}`, {
      value: eventValue,
    })
    .then((response) => {
      callback(response.status)
    })
}
