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
    case 'formulateQ2':
      if (choice === 'direct award') {
        newApplicationQuestions['strategicFit'] = {
          text: 'Have you read the strategic fit criteria?',
          options: [
            { value: 'yes', text: 'Yes' },
            { value: 'No', text: 'No' },
          ],
        }
      } else {
        newApplicationQuestions['strategicFit'] = {}
      }

      break
  }
  return newApplicationQuestions
}
