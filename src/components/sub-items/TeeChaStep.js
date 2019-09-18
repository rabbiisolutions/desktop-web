import React from "react";
import Icon from "../utils/icon";
import moreHandler from "../../events/moreHandler";


const TeeChaStep = (props) =>  {
  return (
      <div className="teecha-step">
        <div className="step">Step {props.stepNumber}</div>
        <div className="step-title">&middot; {props.title}</div>
        <div className="step-icon"><Icon src={props.src} height={15} width={15}/></div>
        <div className="step-description">
          <span>{props.description[0]}</span>
          <span className="more hidden">{props.description[1]}</span>
          <span className="dots" onClick={e => moreHandler(e)}>&nbsp;more...</span>
        </div>
      </div>
  );
};

export default TeeChaStep;
