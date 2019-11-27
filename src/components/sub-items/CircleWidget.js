import React from "react";
import Icon from "../utils/icon";

const CircleWidget = (props) => {
  return (
      <div className={'circle-widget'}>
        <div className={'circle-icon'}>
          <Icon src={props.src} className={'rounded'} width={props.width} height={props.height}/>
        </div>
        <div className={'text'}>{props.text}</div>
      </div>
  )
};

export default CircleWidget;
