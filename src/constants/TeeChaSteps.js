import partnership from "../icons/teeChaSteps/partnership.svg";
import placement from "../icons/teeChaSteps/recruitment.svg";
import management from "../icons/teeChaSteps/tasks.svg";
import joy from "../icons/teeChaSteps/friendship.svg";


const TeeChaSteps = [
  {
    col: 3, stepNumber: 1, title: 'Partnership with Tutors', src: partnership,
    className: 'how-teecha-step-icon',
    description: ['TeeCha is an online agency that offers home tuition jobs to professional teachers' +
    ' in Nairobi county and other counties in Kenya.You can be a home tutor to students in the ' +
    'Kenyan(8-4-4) system (primary/high school), American, Cambridge, A levels and other' +
    ' international systems.']
  },
  {
    col: 3, stepNumber: 2, title: 'Placement of Tutors', src: placement,
    className: 'how-teecha-step-icon',
    description: ['A parent who wants a home tutor signs up with us or give us a call. From the ' +
    'information given the system ranks the most suitable tutor of all available tutors. We select' +
    ' the best, do an interview then send him/ her to the client.']
  },
  {
    col: 3, stepNumber: 3, title: 'Management Of Tuition', src: management,
    className: 'how-teecha-step-icon',
    description: ['We agree on the monthly payment with the client and the intervals of pay. We ' +
    'also send a monthly report on classes and topics covered, plus we ask parents to rate their ' +
    'tutors in a few critical areas to ensure quality service.']
  },
  {
    col: 3, stepNumber: 4, title: 'Give Joy', src: joy,
    className: 'how-teecha-step-icon',
    description: ['We make sure the client is satisfied with the quality of service received and ' +
    'the tutor is comfortable with the environment they tutor in.']
  }
];

export default TeeChaSteps;
