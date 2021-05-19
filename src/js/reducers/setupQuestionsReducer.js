export const setupQuestionsReducer = (questions, { question, choice }) => {
  const newQuestions = { ...questions }
  newQuestions[question] = choice
  return newQuestions
}
