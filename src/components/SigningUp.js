import BackGround from "../helpers/backGround";
import texts from "../constants/texts";
import React from "react";

const SigningUp = () => {
  return (
    <section className={"how-to-" + BackGround()}>
      <div className="filter">
        <div className="signing-up">{texts.signUpHow}</div>
        <div className="text">{texts.getATutor}</div>
        <div className="get-a-tutor">

        </div>
        <div className="">{texts.beATutor}</div>
        <div className="be-a-tutor">

        </div>
      </div>
    </section>
  );
};

export default SigningUp;
