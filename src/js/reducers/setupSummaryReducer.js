export const setupSummaryReducer = (summary, { question, choice }) => {
  let newSummary = { ...summary }

  switch (question) {
    case 'isCompetitiveFund':
      if (choice === 'yes') {
        newSummary['isCompetitiveFund'] = 'This is a competitive fund.'
      } else {
        newSummary = {}
      }
      break
    case 'deliveryMethod':
      newSummary['deliveryMethod'] = `The fund will be delivered by ${choice}.`
      newSummary['applicantTypes'] =
        choice === 'direct award'
          ? 'Applicants can include: Local authorities, charities and businesses.'
          : ''
      newSummary['ringfenced'] = null
      break
    case 'capitalSpend':
      newSummary['capitalSpend'] =
        choice === 'yes'
          ? 'The fund involves capital spend'
          : 'The fund does not involve capital spend'
      break
    case 'ringfenced':
      newSummary['ringfenced'] = `The fund will be ${choice}`
      break
  }
  return newSummary
}
