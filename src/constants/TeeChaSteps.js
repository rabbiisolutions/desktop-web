import partnership from "../icons/teeChaSteps/partnership.svg";
import placement from "../icons/teeChaSteps/recruitment.svg";
import management from "../icons/teeChaSteps/tasks.svg";
import joy from "../icons/teeChaSteps/friendship.svg";


const TeeChaSteps = [
  {
    col: 3, stepNumber: 1, title: 'Partnership with Tutors', src: partnership,
    className: 'how-teecha-step-icon',
    description: 'TeeCha is an online  agency that offers home tuition jobs to ' +
        'qualified teachers and university students with high KCSE grades to carry' +
        ' out home tuition for students in Nairobi  county and other counties in ' +
        'Kenya. We register tutors from national, extra county, and county schools ' +
        'teaching the Kenyan 8.4.4 curriculum (primary and high school). We also ' +
        'have Home Tutors for students doing American, Cambridge, A levels and ' +
        'other international systems.'
  },
  {
    col: 3, stepNumber: 2, title: 'Placement of Tutors', src: placement,
    className: 'how-teecha-step-icon',
    description: 'Next, a parent who needs home tuition for their child contacts us ' +
        'through call or registers on our website. At this stage the tutors are all ' +
        'evaluated on various factors, with qualification having more than 50% of the ' +
        'marks, then other factors like distance between the tutors residence and the ' +
        'client\'s, the availability of tutor with the time of tuition, etc. All' +
        ' this give a tutor a percentage score and the best tutor of all those' +
        ' in the system is selected for the client.'
  },
  {
    col: 3, stepNumber: 3, title: 'Management Of Tuition', src: management,
    className: 'how-teecha-step-icon',
    description: 'Once home tuition commences, we manage the tuition classes and the ' +
        'payment process. We make sure the tutors have planned well for all the classes' +
        ' they attend and that the client is comfortable with the tutor and the ' +
        'services. In case the client is dissatisfied we swap the tutors. We also ' +
        'give monthly updates  on all that has happened in the home tuition to the ' +
        'client. We ensure that the tutor is comfortable with the environment the' +
        ' tuition takes place.'
  },
  {
    col: 3, stepNumber: 4, title: 'Give Joy', src: joy,
    className: 'how-teecha-step-icon',
    description: 'We are the business of providing joy and satisfaction to all' +
        ' stakeholders. We ensure the client and the student has joy and is' +
        ' satisfied with the home tuition. We also ensure the tutor has' +
        ' joy and is satisfied with the manner the home tuition is conducted.'
  }
];

export default TeeChaSteps;
