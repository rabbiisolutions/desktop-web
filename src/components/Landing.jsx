import React from "react";
import Icon from "./basic/Icon";
import bulb from "../icons/ideabulb.svg"
import texts from "../constants/Texts";
import landingJ from "../images/landing.jpg";
import landingW from "../images/landing.webp";
import ImageWebp from "../helpers/ImageWebp";

function Landing() {
  return (
      <section id={"landing-image"}>
        <ImageWebp
            src={landingJ}
            srcWebp={landingW}
            className={'landing-image'}
            alt={'joyous-student'}
        />
        <div className="slogan">
          <Icon src={bulb} height={6}/>
          <span className="text">{texts.slogan}</span>
        </div>
      </section>
  );
}

// Exporting the component
export default Landing;
