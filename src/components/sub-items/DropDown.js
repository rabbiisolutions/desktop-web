import texts from "../../constants/Texts";
import dropDownHandler from "../../events/DropDown";
import React from "react";

const DropDown = () => {
  return (
      <div className="our-services hidden">
        <a className="nav-sub-item" href="#teecha" onClick={e => dropDownHandler(e)}>
          {texts.ourServices[0]}
        </a>
      </div>
  );
};

export default DropDown;
