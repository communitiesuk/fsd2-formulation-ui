export const applicationQuestionsReducer = (
  applicationQuestionsState,
  { question, choice }
) => {
  const newApplicationQuestionsState = { ...applicationQuestionsState }
  let newApplicationQuestions =
    newApplicationQuestionsState.applicationQuestions

  const basicOrgTypeQuestion = {
    text: 'What is your organisation?',
    options: [
      { value: 'ltdcomp', text: 'Limited Company' },
      { value: 'charity', text: 'Charity' },
      { value: 'la', text: 'Local Authority' },
      { value: 'mca', text: 'Mayoral Combined Authority' },
      { value: 'lep', text: 'Local Enterprise Partnership' },
    ],
    validationHint: null,
  }

  switch (question) {
    case 'isCompetitiveFund':
      if (choice === 'yes') {
        newApplicationQuestions['orgType'] = basicOrgTypeQuestion
      } else {
        newApplicationQuestions = {}
      }
      break
    case 'deliveryMethod':
      if (choice === 'direct award') {
        newApplicationQuestions['orgType'] = basicOrgTypeQuestion
        newApplicationQuestions['strategicFit'] = {
          text: 'Have you read the strategic fit criteria?',
          options: [
            { value: 'yes', text: 'Yes' },
            { value: 'No', text: 'No' },
          ],
        }
      } else if (choice === 'intermediary bodies') {
        newApplicationQuestions['orgType'] = basicOrgTypeQuestion
        newApplicationQuestions['orgType']['validationHint'] =
          'Must be LA, MCA or LEP'
        newApplicationQuestions['strategicFit'] = {}
      } else {
        newApplicationQuestions['strategicFit'] = {}
      }

      break
  }
  return newApplicationQuestionsState
}
