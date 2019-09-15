import register from "../icons/howTo/application.svg";
import counselling from "../icons/howTo/feedback.svg";
import placement from "../icons/howTo/recruitment.svg";
import payment from "../icons/howTo/online-payment.svg";
import womanJoy from "../icons/howTo/smiling-girl.svg";


const howToGetATutorSteps = [
  {
    col: 2, stepNumber: 1, title: 'Register or Call', src: register,
    className: 'how-to-step-icon',
    description: 'It is simple. Simply register or call 0772 915 361 to get a home tutor.'
  },
  {
    col: 2, stepNumber: 2, title: 'Preliminary Counselling and Evaluation' +
        ' Class.', src: counselling,
    className: 'how-to-step-icon',
    description: 'We shall send an expert to come and talk with your child and ' +
        'try to find his/her academic challenges and advice her on how to do ' +
        'well academically.'
  },
  {
    col: 2, stepNumber: 3, title: 'Placement of Tutor.',
    src: placement, className: 'how-to-step-icon',
    description: 'All registered tutors in our database, whether in Nairobi' +
        ' county or other counties in Kenya, will be evaluated and the one with' +
        ' the highest score and near you, will be chosen to be your tutor.' +
        ' We prefer same gender home tuition.'
  },
  {
    col: 2, stepNumber: 4, title: 'Payment Arrangement', src: payment,
    className: 'how-to-step-icon',
    description: 'You select the frequency of your payment either weekly, or ' +
        'after a fortnight, or monthly then pay for the upcoming session.'
  },
  {
    col: 2, stepNumber: 5, title: 'Get Joy', src: womanJoy,
    className: 'how-to-step-icon',
    description: 'Get joy by having competent, convenient and efficient home ' +
        'tuition for your child or yourself. Be it on holidays or normal ' +
        'school calendar'
  }
];

export default howToGetATutorSteps;
