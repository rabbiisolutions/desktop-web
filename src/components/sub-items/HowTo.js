import React from "react";
import Icon from "../utils/icon";


const HowToStep = (props) =>  {
  return (
      <div className="how-to-step">
        <div className="step">Step {props.stepNumber}</div>
        <div className="title">&middot; {props.title}</div>
        <Icon src={props.src} className={props.className} height={15} width={15}/>
        <div className="description">{props.description}</div>
      </div>
  );
};

export default HowToStep;
