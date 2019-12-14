import React from "react";
import Icon from "../basic/Icon";

const CircleWidget = (props) => {
  return (
      <div className={'circle-widget'}>
        <div className={'circle-icon'}>
          <Icon src={props.src} className={'rounded'} width={5} height={5} units={'vw'}/>
        </div>
        <div className={'text'}>{props.text}</div>
      </div>
  )
};

export default CircleWidget;
