export const furthestQReducer = (furthestQ, { questionNumber }) => {
  if (questionNumber > furthestQ) {
    return questionNumber
  }
  return furthestQ
}
