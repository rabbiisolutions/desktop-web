import CircleWidget from "./composite/CircleWidget.jsx";
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
import plane1 from "../icons/howTeeChaWorks/Line 9plane.svg"
import plane2 from "../icons/howTeeChaWorks/paper-plane 1plane.svg"
import plane3 from "../icons/howTeeChaWorks/Line 8plane.svg"
import pen1 from "../icons/howTeeChaWorks/Line 10pen.svg"
import pen2 from "../icons/howTeeChaWorks/Vectorpen.svg"
import pen3 from "../icons/howTeeChaWorks/Arrow 29pen.svg"
import dotted from "../icons/howTeeChaWorks/Arrow 22dotted-down.svg"
import tutorStart from "../icons/howTeeChaWorks/Arrow 28start-tutor.svg"
import clientStart from "../icons/howTeeChaWorks/Arrow 23start-client.svg"
import Icon from "./basic/Icon";
import DownArrow from "./composite/DownArrow.jsx";
import FLowLine from "./composite/FlowLine.jsx";
import React from "react";

const HowTeeChaWorks = () => {
  return (
      <section className={'how-teecha-works'}>
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
              <Icon src={plane1} width={8} height={5} units={'vw'} className={'start'}/>
              <Icon src={plane2} width={16} height={5} units={'vw'} className={'mid'}/>
              <Icon src={plane3} width={8} height={5} units={'vw'} className={'end'}/>
            </div>
            <div id={'pen'}>
              <Icon src={pen1} width={8} height={5} units={'vw'} className={'start'}/>
              <Icon src={pen2} width={16} height={5} units={'vw'} className={'mid'}/>
              <Icon src={pen3} width={8} height={5} units={'vw'} className={'end'}/>
            </div>
          </section>
          <section className={'client-col col'}>
            <CircleWidget src={signup} text={'Client Sign Up'}/>
            <FLowLine/>
            <CircleWidget src={studInfo} text={'Give Client Student Info'}/>
            <DownArrow/>
            <CircleWidget src={gets} text={'Gets Tutor'}/>
            <Icon src={dotted} width={5} height={43} units={'vw'} className={'dotted-arrow'}/>
            <CircleWidget src={start} text={'Session Begins'}/>
            <DownArrow/>
            <CircleWidget src={counselling} text={'Mentoring & Counselling'}/>
          </section>
        </div>
      </section>
  );
};

export default HowTeeChaWorks;
