import React from "react";
import texts from "../constants/texts";
import CircleWidget from "./sub-items/CircleWidget";
import signup from "../icons/howTo/application.svg"
import proInfo from "../icons/teeChaSteps/resume.svg"
import studInfo from "../icons/teeChaSteps/resume (1).svg"
import screen from "../icons/howTo/time.svg"
import gets from "../icons/teeChaSteps/deal.svg"
import verification from "../icons/teeChaSteps/icon.svg"
import placement from "../icons/howTo/recruitment.svg"
import start from "../icons/teeChaSteps/start-line.svg"
import evaluation from "../icons/teeChaSteps/evaluation.svg"
import counselling from "../icons/teeChaSteps/mentor.svg"
import right from "../icons/teeChaSteps/fa-solid_long-arrow-alt-downarrow-right.svg"
import left from "../icons/teeChaSteps/fa-solid_long-arrow-alt-downarrow-left.svg"
import dotted from "../icons/teeChaSteps/Arrow 22dotted-down.svg"
import down from "../icons/teeChaSteps/fa-solid_long-arrow-alt-downdown-solid.svg"

const HowTeeChaWorks = () => {
  return (
      <section className="how-teecha">
        <h2 className="how-teecha-title">{texts.howTeeChaWorks}</h2>
        <div className="how-teecha-steps">
          <section id="tutor-steps">
            <div className={'user-title'}>Tutor</div>

          </section>
          <section id="client-steps">
            <div className={'user-title'}>Client</div>
          </section>
        </div>
      </section>
  );
};

export default HowTeeChaWorks;
