import React from "react";
import Icon from "../basic/Icon";
import star from "../../icons/star-solid.svg"


const Star = (props) => {
  return <Icon src={star} className={"star " + props.shade } width={props.height} height={props.height} key={props.key} units={'vw'}/>;
};

export default Star;
