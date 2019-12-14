import CircleWidget from "./composite/CircleWidget.jsx";
import signup from "../icons/howTeeChaWorks/circle/sign-up.svg"
import proInfo from "../icons/howTeeChaWorks/circle/give-pro-info.svg"
import studInfo from "../icons/howTeeChaWorks/circle/student-client-info.svg"
import screen from "../icons/howTeeChaWorks/circle/screen-tutor.svg"
import gets from "../icons/howTeeChaWorks/circle/get-tutor.svg"
import verification from "../icons/howTeeChaWorks/circle/tutor-verification.svg"
import placement from "../icons/howTeeChaWorks/circle/tutor-placement.svg"
import start from "../icons/howTeeChaWorks/circle/begin-session.svg"
import evaluation from "../icons/howTeeChaWorks/circle/evaluation-management.svg"
import counselling from "../icons/howTeeChaWorks/circle/mentorship.svg"
import plane1 from "../icons/howTeeChaWorks/arrows/plane-line-start.svg"
import plane2 from "../icons/howTeeChaWorks/arrows/paper-plane.svg"
import plane3 from "../icons/howTeeChaWorks/arrows/plane-line-end.svg"
import pen1 from "../icons/howTeeChaWorks/arrows/pen-line-end.svg"
import pen2 from "../icons/howTeeChaWorks/arrows/pen.svg"
import pen3 from "../icons/howTeeChaWorks/arrows/pen-arrow-start.svg"
import dotted from "../icons/howTeeChaWorks/arrows/light-dotted-down-long.svg"
import tutorStart from "../icons/howTeeChaWorks/arrows/tutor-start-arrow.svg"
import clientStart from "../icons/howTeeChaWorks/arrows/client-start-curved.svg"
import Icon from "./basic/Icon";
import DownArrow from "./composite/DownArrow.jsx";
import FLowLine from "./composite/FlowLine.jsx";
import React from "react";
import texts from "../constants/Texts";

const HowTeeChaWorks = () => {
  return (
      <section className={'how-teecha-works'}>
        <div className={'section-title'}>{texts.howTeeChaWorks}</div>
        <div className={'titles'}>
          <div className={'user-title'}>tutor</div>
          <div className={'user-title'}>client</div>
        </div>
        <div className={'start-arrow'}>
          <Icon src={tutorStart} width={16} height={5} units={'vw'}/>
          <Icon src={clientStart} width={16} height={5} units={'vw'}/>
        </div>
        <div className={'columns'}>
          <section className={'tutor-col col'}>
            <CircleWidget src={signup} text={'Tutor Sign Up'}/>
            <FLowLine/>
            <CircleWidget src={proInfo} text={'Professional Info Given'}/>
            <FLowLine/>
            <CircleWidget src={screen} text={'Screen Tutor'}/>
            <FLowLine/>
            <CircleWidget src={verification} text={'Tutor Verification'}/>
            <FLowLine/>
            <CircleWidget src={placement} text={'Tutor Placement'}/>
            <DownArrow/>
            <CircleWidget src={evaluation} text={'Tutor Evaluation & Management'}/>
          </section>
          <section className={'mid-col col'}>
            <div id={'plane'}>
              <Icon src={plane1} width={8} height={4.5} units={'vw'} className={'start'}/>
              <Icon src={plane2} width={8} height={3} units={'vw'} className={'mid'}/>
              <Icon src={plane3} width={8} height={4.5} units={'vw'} className={'end'}/>
            </div>
            <div id={'pen'}>
              <Icon src={pen1} width={8} height={4.5} units={'vw'} className={'start'}/>
              <Icon src={pen2} width={4} height={2.5} units={'vw'} className={'mid'}/>
              <Icon src={pen3} width={8} height={2} units={'vw'} className={'end'}/>
            </div>
          </section>
          <section className={'client-col col'}>
            <CircleWidget src={signup} text={'Client Sign Up'}/>
            <FLowLine/>
            <CircleWidget src={studInfo} text={'Give Client Student Info'}/>
            <DownArrow/>
            <CircleWidget src={gets} text={'Gets Tutor'}/>
            <Icon src={dotted} width={5} height={13} units={'vw'} className={'dotted-arrow'}/>
            <CircleWidget src={start} text={'Session Begins'}/>
            <DownArrow/>
            <CircleWidget src={counselling} text={'Mentoring & Counselling'}/>
          </section>
        </div>
      </section>
  );
};

export default HowTeeChaWorks;
