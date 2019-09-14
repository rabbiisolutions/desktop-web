import React from "react";
import Icon from "../utils/icon";


const TeeChaStep = (props) =>  {
  return (
      <div className="teecha-step">
        <div className="step">Step {props.stepNumber}</div>
        <div className="step-title">&middot; {props.title}</div>
        <div className="step-icon"><Icon src={props.src} height={15} width={15}/></div>
        <div className="step-description">{props.description}</div>
      </div>
  );
};

export default TeeChaStep;
