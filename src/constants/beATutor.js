import register from "../../icons/howTo/application.svg";
import evaluation from "../../icons/howTo/time.svg";
import placement from "../../icons/howTo/recruitment.svg";
import manJoy from "../../icons/howTo/boy-broad-smile.svg";


const howToBeATutorSteps = [
  {
    col: 2, stepNumber: 1, title: 'Register or Call', src: register,
    className: 'how-to-step-icon',
    description: 'It is very easy to get a home tuition job in Nairobi County' +
        ' or other counties in Kenya, simply register or call 0772 915 361'
  },
  {
    col: 2, stepNumber: 2, title: 'Evaluation', src: evaluation,
    className: 'how-to-step-icon',
    description: 'When a client near you wants home tuition, the system will' +
        ' evaluate your qualification and your availability.'
  },
  {
    col: 2, stepNumber: 3, title: 'Placement',
    src: placement, className: 'how-to-step-icon',
    description: 'If you are the most qualified and available tutor around, ' +
        'you will be selected. '
  },
  {
    col: 2, stepNumber: 4, title: 'Get Joy', src: manJoy,
    className: 'how-to-step-icon',
    description: 'Get joy by conducting home tuition in Nairobi county and other ' +
        'counties in Kenya, in a secure and comfortable environment and by being' +
        ' well rewarded for your efforts.'
  }
];

export default howToBeATutorSteps;
