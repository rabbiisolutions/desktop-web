import React from "react";
import BackGround from "../helpers/backGround";
import Icon from "./utils/icon";
import bulb from "../icons/idea.svg"
import texts from "../constants/texts";

function LandingSection() {
  return (
      <section className={"landing-" + BackGround()}>
        <div className="slogan">
          <Icon src={bulb} height={6}/>
          <span className="text">{texts.slogan}&nbsp;</span>
        </div>
      </section>
  );
}

// Exporting the component
export default LandingSection;
