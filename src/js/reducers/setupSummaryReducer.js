export const setupSummaryReducer = (summary, { question, choice }) => {
  let newSummary = { ...summary }

  switch (question) {
    case 'formulateQ1':
      if (choice === 'yes') {
        newSummary['fundType'] = 'This is a competitive fund.'
      } else {
        newSummary = {}
      }
      break
    case 'formulateQ2':
      newSummary['deliveryMethod'] = `The fund will be delivered by ${choice}.`
      newSummary['applicantTypes'] =
        choice === 'direct award'
          ? 'Applicants can include: Local authorities, charities and businesses.'
          : ''
      break
  }
  return newSummary
}
