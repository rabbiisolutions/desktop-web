import React from "react";
import texts from "../constants/texts";
import benefits from "../constants/benefits";

const Benefit = (props) => {
  return (
      <div className={'benefit'}>
        <h2 className={'title'}>{props.title}</h2>
        <p className={'desc'}>{props.desc}</p>
      </div>
  )
};

const Welcome = () => {
  return (
      <section id={'welcome'}>
        <div className={'bulletin'}>
          <h4 className={'section-title'}>{texts.welcome}</h4>
          <div className={'sell'}>{texts.welcomeSell[0]}</div>
          <div className={'sell'}>{texts.welcomeSell[1]}</div>
          <div id={'emphasis'}>{texts.welcomeSell[2]}</div>
        </div>
        <div className={'row'}>
          {Benefit(benefits.sameGender)}
          {Benefit(benefits.plus500)}
          {Benefit(benefits.academicCounselling)}
        </div>
        <div className={'row'}>
          {Benefit(benefits.affordable)}
          {Benefit(benefits.studentRatio)}
          {Benefit(benefits.peerToPeer)}
        </div>
      </section>
  )
};

export default Welcome;
