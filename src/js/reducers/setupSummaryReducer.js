export const setupSummaryReducer = (summary, { question, choice }) => {
  const newSummary = { ...summary }

  switch (question) {
    case 'formulateQ1':
      newSummary['fundType'] =
        choice === 'yes' ? 'This is a competitive fund.' : ''
      break
    case 'formulateQ2':
      // TODO Bug: delivery method remains after invalid competitive answer
      newSummary['deliveryMethod'] = `The fund will be delivered by ${choice}.`
      newSummary['applicantTypes'] =
        choice === 'direct award'
          ? 'Applicants can include: Local authorities, charities and businesses.'
          : ''
      break
  }
  return newSummary
}
