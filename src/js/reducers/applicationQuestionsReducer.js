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
  validationHint: 'Answer must be YES',
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
  const setupResponses = applicationQuestionsState.setupResponses || {}
  setupResponses[question] = choice

  // strategicFit
  if (
    setupResponses.deliveryMethod === 'direct award' ||
    (setupResponses.deliveryMethod === 'intermediary bodies' &&
      setupResponses.ringfenced === 'ringfenced')
  ) {
    applicationQuestions['strategicFit'] = basicStrategicFitQuestion
  }

  // orgType
  applicationQuestions['orgType'] = basicOrgTypeQuestion
  if (setupResponses.deliveryMethod === 'intermediary bodies') {
    applicationQuestions['orgType']['validationHint'] = 'Must be LA, MCA or LEP'
  } else if (setupResponses.deliveryMethod === 'direct award') {
    if (setupResponses.capitalSpend === 'yes') {
      applicationQuestions['orgType']['validationHint'] =
        'Must NOT be LA, MCA or LEP'
    } else if (setupResponses.capitalSpend === 'no') {
      applicationQuestions['orgType']['validationHint'] =
        'Must be LA, MCA or LEP'
    } else {
      applicationQuestions['orgType']['validationHint'] = null
    }
  } else {
    applicationQuestions['orgType']['validationHint'] = null
  }

  return {
    applicationQuestions: applicationQuestions,
    setupResponses: setupResponses,
  }
}
