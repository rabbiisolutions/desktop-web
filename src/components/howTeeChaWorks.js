import React from "react";
import texts from "../constants/Texts";
import CircleWidget from "./sub-items/CircleWidget";
import signup from "../icons/howTeeChaWorks/application.svg"
import proInfo from "../icons/howTeeChaWorks/resume.svg"
import studInfo from "../icons/howTeeChaWorks/resume (1).svg"
import screen from "../icons/howTeeChaWorks/time.svg"
import gets from "../icons/howTeeChaWorks/deal.svg"
import verification from "../icons/howTeeChaWorks/verified-account.svg"
import placement from "../icons/howTeeChaWorks/recruitment.svg"
import start from "../icons/howTeeChaWorks/start-line.svg"
import evaluation from "../icons/howTeeChaWorks/evaluation.svg"
import counselling from "../icons/howTeeChaWorks/mentor.svg"
import right from "../icons/howTeeChaWorks/fa-solid_long-arrow-alt-downarrow-right.svg"
import left from "../icons/howTeeChaWorks/fa-solid_long-arrow-alt-downarrow-left.svg"
import dotted from "../icons/howTeeChaWorks/Arrow 22dotted-down.svg"
import Icon from "./utils/icon";
import DownArrow from "./utils/DownArrow";


const HowTeeChaWorks = () => {
  return (
      <section className="how-teecha">
        <h2 className="how-teecha-title">{texts.howTeeChaWorks}</h2>
        <div className="how-teecha-steps">
          <section className={'tutor-col col'}>
            <div className={'user-title tutor-title'}>Tutor</div>
            <CircleWidget src={signup} text={'Tutor Sign Up'}/>
            <DownArrow/>
            <CircleWidget src={proInfo} text={'Give Professional Info'}/>
            <DownArrow/>
            <CircleWidget src={screen} text={'Screen Tutor'}/>
            <DownArrow/>
            <CircleWidget src={verification} text={'Tutor Verification'}/>
            <DownArrow/>
            <CircleWidget src={placement} text={'Tutor Placement'}/>
            <DownArrow/>
            <CircleWidget src={evaluation} text={'Tutor Evaluation & Management'}/>
          </section>
          <section className={'mid-col col'}>
            <Icon src={left} width={17.26} height={1.125} className={'left-arrow'}/>
            <Icon src={right} width={17.26} height={1.125} className={'right-arrow'}/>
          </section>
          <section className={'client-col col'}>
            <div className={'user-title client-title'}>Client</div>
            <CircleWidget src={signup} text={'Client Sign Up'}/>
            <DownArrow/>
            <CircleWidget src={studInfo} text={'Give Student Client Info'}/>
            <DownArrow/>
            <CircleWidget src={gets} text={'Gets Tutor'}/>
            <Icon src={dotted} width={1.25} height={14.85} className={'dotted-arrow'}/>
            <CircleWidget src={start} text={'Session Begins'}/>
            <DownArrow/>
            <CircleWidget src={counselling} text={'Mentoring & Counselling'}/>
          </section>
        </div>
      </section>
  );
};

export default HowTeeChaWorks;
