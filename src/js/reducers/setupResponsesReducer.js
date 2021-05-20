export const setupResponsesReducer = (questions, { question, choice }) => {
  const newQuestions = { ...questions }
  newQuestions[question] = choice
  return newQuestions
}
