import React from "react";
import ButtonLink from "./utils/ButtonLink";
import signUpHandler from "../events/signUpModal";

const SignUpModal = (props) => {
  return (
      <div className={props.className}>
        <div className="close-icon" onClick={e => signUpHandler(e)}>&#10006;</div>
        <div className="sign-up-text">{props.signUpText}</div>
        <div className="user-title">Clients/Parents</div>
        <div id="client-btns">
          <ButtonLink link="https://forms.gle/y7KTkMDtYCtAywDu6" className="clients-btn" value="Get a Tutor"/>
        </div>
        <hr className="sign-up-divider"/>
        <div className="user-title">Tutors</div>
        <div id="tutor-btns">
          <ButtonLink link="https://forms.gle/LerPUYib9EJ3yMxr7" className="tutors-btn" value="Non TSC Tutor"/>
          <ButtonLink link="https://forms.gle/ZU8GZrYVPWenL4r19" className="tutors-btn" value="TSC Tutor"/>
          <ButtonLink link="https://forms.gle/CmgUyZCWrnLgsqnC9" className="tutors-btn" value="Skills Tutor"/>
        </div>
      </div>
  );
};

// Exporting the component
export default SignUpModal;
