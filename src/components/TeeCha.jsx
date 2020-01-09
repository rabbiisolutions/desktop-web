import React from "react";
import texts from "../constants/Texts";
import teeChaAreasLists from "./composite/TeeChaAreasList";
import SignUpModal from "./SignUpModal";
import ButtonLink from "./basic/ButtonLink.jsx";
import teechaJ from "../images/teecha.jpg";
import teechaW from "../images/teecha.webp";
import ImageWebp from "../helpers/ImageWebp";

const TeeCha = () => {
  return (
    <section id={"teecha"} className={'section'}>
      <div id={'teecha-row'}>
        <ImageWebp
            src={teechaJ}
            srcWebp={teechaW}
            className={'teecha-image'}
            alt={'student'}
        />
        <div id="boxes">
          <h2 id="teecha-caption">
            <div id="teecha-title">{texts.teeCha}</div>
            <a id="caption" href={'https://catalogue.rabbii.co.ke'}>{texts.homeTuition}</a>
          </h2>
          <div id="teecha-box">
            <div id="home-tuition-areas">{texts.homeTuitionAreas}</div>
            <div id="teecha-areas">
              <div className="col-1">
                <div className="category">Academic Tuition</div>
                {teeChaAreasLists.academics}
              </div>
              <div className="col-2">
                <div className="category">Skills Tuition</div>
                <div id="skills">
                  <div id="fl">
                    <div className="sub-category">Foreign Languages</div>
                    {teeChaAreasLists.fl}
                  </div>
                  <div id="gs">
                    <div className="sub-category">Games & Sports</div>
                    {teeChaAreasLists.gs}
                  </div>
                </div>
              </div>
            </div>
            <div id={'catalogue'}>
              <ButtonLink link="https://catalogue.rabbii.co.ke" className="services" value="Learn more about Our Services"/>
            </div>
            <div className="info">
              {texts.homeTuitionInfo}
            </div>
          </div>
          <div id={'tuition-jobs'}>
            <ButtonLink link="https://tuition-jobs.rabbii.co.ke" className="services" value="View Available Tuition Jobs"/>
          </div>
          <SignUpModal className="sign-up box" signUpText="Sign Up to Receive Our Price List" status="hidden"/>
        </div>
      </div>
    </section>
  );
};

export default TeeCha;
