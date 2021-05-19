export const applicationQuestionsReducer = (
  applicationQuestions,
  { question, choice }
) => {
  const newApplicationQuestions = { ...applicationQuestions }

  switch (question) {
    case 'formulateQ1':
      if (choice === 'yes') {
        newApplicationQuestions['orgType'] = {
          text: 'What is your organisation?',
          options: [
            { value: 'ltdcomp', text: 'Limited Company' },
            { value: 'charity', text: 'Charity' },
            { value: 'la', text: 'Local Authority' },
            { value: 'mca', text: 'Mayoral Combined Authority' },
            { value: 'lep', text: 'Local Enterprise Partnership' },
          ],
        }
      } else {
        newApplicationQuestions['orgType'] = {}
      }
      break
  }
  return newApplicationQuestions
}
