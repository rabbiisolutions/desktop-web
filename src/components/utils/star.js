import React from "react";
import Icon from "./icon";
import star from "../../icons/star-solid.svg"


const Star = (props) => {
  return <Icon src={star} className={"star " + props.shade } height={props.height} key={props.key}/>;
};

export default Star;
