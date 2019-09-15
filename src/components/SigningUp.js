import BackGround from "../helpers/backGround";
import texts from "../constants/texts";
import React from "react";
import HowToStep from "./sub-items/HowTo";
import howToGetATutorSteps from "../constants/getATutor";
import howToBeATutorSteps from "../constants/beATutor";
import Next from "./utils/next";

const SigningUp = () => {
  return (
    <section className={"how-to-" + BackGround()}>
      <div className="filter">
        <div className="signing-up">{texts.signUpHow}</div>
        <div className="get-text">1.&nbsp;{texts.getATutor}</div>
        <div className="get-a-tutor">
          {HowToStep(howToGetATutorSteps[0])}
          <Next/>
          {HowToStep(howToGetATutorSteps[1])}
          <Next/>
          {HowToStep(howToGetATutorSteps[2])}
          <Next/>
          {HowToStep(howToGetATutorSteps[3])}
          <Next/>
          {HowToStep(howToGetATutorSteps[4])}
        </div>
        <div className="be-text">2.&nbsp;{texts.beATutor}</div>
        <div className="be-a-tutor">
          {HowToStep(howToBeATutorSteps[0])}
          <Next/>
          {HowToStep(howToBeATutorSteps[1])}
          <Next/>
          {HowToStep(howToBeATutorSteps[2])}
          <Next/>
          {HowToStep(howToBeATutorSteps[3])}
        </div>
      </div>
    </section>
  );
};

export default SigningUp;
