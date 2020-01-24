import React from "react";

const Benefit = (props) => {
  return (
      <div className={'benefit'}>
        <h2 className={'title'}>{props.title}</h2>
        <p className={'desc'}>{props.desc}</p>
      </div>
  )
};

export default Benefit;
