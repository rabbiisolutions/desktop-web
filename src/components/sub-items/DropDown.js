import texts from "../../constants/texts";
import React from "react";

const DropDown = () => {
  return (
      <div className="our-services hidden">
        <a className="nav-sub-item" href="#teecha">
          {texts.ourServices[0]}
        </a>
      </div>
  );
};

export default DropDown;
