# Prototype Backlog

Stories which make up the prototype.

## Active

Stories to inform the prototype, ranked by priority. This list will change as work unfolds but at
the time of any one commit this list should represent the current expectations.

Once completed the checkbox next to the item will be checked.

- [x] Ops: add in build step for deployment

- [ ] Ops: Stand up a publicly accessible service in cloud

- [x] Designer: I can see the page header and Q1

- [x] Designer: Clicking "guidance" on Q1 yields some guidance

- [x] Designer: Answering "No" to Q1 yields a Stop message

- [x] Designer: Answering "Yes" to Q1 yields Q2

- [x] Designer: Answering "Yes" to Q1 yields the "your choices" section and Q1 choice

- [x] Designer: Clicking "guidance" on Q2 yields some other guidance

- [x] Designer: Answering Q2 adds the Q2 result to the Your Choices section

- [x] Designer: Q2 choice of "direct award" yields extra summary "Applicants can include: Local authorities, charities and businesses"

- [x] Designer: Having answered Q2, the "Publish" button appears

- [x] Designer: Clicking "Publish" publishes the Fund as an Event

- [x] Rework setup questions to be event-driven / reducer-driven, so that we may....

- [x] ...rework publication to send the event data with all the info the Application UI needs

- [x] Designer: If Summary is visible I also see an Example Application Form (with just the Org Type)

- [x] Designer: For Direct Award fund, we also see the "strategic fit" question (FIRST)

- [x] Designer: If Intermediary, show 'validation hint' for Org Type Q; it is always "must be LA, MCA, LEP"

- [x] Rework show / hide logic for Qs and prohibition message, to make more extensible

- [x] Designer: Q3 is "Capital Spend?"

- [x] Designer: If Direct Award + Capital Spend Yes then Org Type validation hint is "must not be LA, MCA, or LEP"; if "no" then "MUST BE LA, MCA, LEP"

- [x] Rework the display of setup questions to be reducer based and JSON defined - dispense with the special form element types RadioQuestion etc

- [x] Designer: For "intermediaries" there is also Q4 "Ringfenced?"  

- [x] Designer: For intermediaries + Ringfenced Yes, we see "Strategic Fit" question

- [x] Designer: For intermediaries + Ringfenced No, we do not see "Strategic Fit" question

- [x] Designer: "Strategic Fit" Q always has validation hint of "Answer must be Yes"

- [x] Fix the show / hide of the Publish button

- [x] Add the Application Questions to the payload of the event

- [x] (STRETCH) Designer: Capital Spend question is shown with validation hint blank UNLESS fund setup 'capital spend' is 'yes' in which case "Must be NO"

- [ ] Fix bug where Ringfenced Q does not disappear when deliveryMethod is changed
