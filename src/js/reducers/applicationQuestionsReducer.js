const basicOrgTypeQuestion = {
  text: 'What is your organisation?',
  options: [
    { value: 'ltdcomp', text: 'Limited Company' },
    { value: 'charity', text: 'Charity' },
    { value: 'la', text: 'Local Authority' },
    { value: 'mca', text: 'Mayoral Combined Authority' },
    { value: 'lep', text: 'Local Enterprise Partnership' },
  ],
}

const basicStrategicFitQuestion = {
  text: 'Have you read the strategic fit criteria?',
  options: [
    { value: 'yes', text: 'Yes' },
    { value: 'No', text: 'No' },
  ],
}

export const applicationQuestionsReducer = (
  applicationQuestionsState,
  { question, choice }
) => {
  if (question === 'isCompetitiveFund' && choice === 'no') {
    return {}
  }

  // We rebuild the application questions state from scratch every time
  const applicationQuestions = {}

  // This state tree also needs to track the setup Qs, so maintains its own state copy
  const setupQuestions = applicationQuestionsState.setupQuestions || {}
  setupQuestions[question] = choice

  // orgType
  applicationQuestions['orgType'] = basicOrgTypeQuestion
  if (setupQuestions.deliveryMethod === 'intermediary bodies') {
    applicationQuestions['orgType']['validationHint'] = 'Must be LA, MCA or LEP'
  } else if (setupQuestions.deliveryMethod === 'direct award') {
    if (setupQuestions.capitalSpend === 'yes') {
      applicationQuestions['orgType']['validationHint'] =
        'Must NOT be LA, MCA or LEP'
    } else if (setupQuestions.capitalSpend === 'no') {
      applicationQuestions['orgType']['validationHint'] =
        'Must be LA, MCA or LEP'
    } else {
      applicationQuestions['orgType']['validationHint'] = null
    }
  } else {
    applicationQuestions['orgType']['validationHint'] = null
  }

  // strategicFit
  if (setupQuestions.deliveryMethod === 'direct award') {
    applicationQuestions['strategicFit'] = basicStrategicFitQuestion
  }

  return {
    applicationQuestions: applicationQuestions,
    setupQuestions: setupQuestions,
  }
}
