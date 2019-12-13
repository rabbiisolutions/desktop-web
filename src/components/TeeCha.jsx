import React from "react";
import texts from "../constants/Texts";
import teeChaAreasLists from "./composite/TeeChaAreasList";
import SignUpModal from "./SignUpModal";
import ButtonLink from "./basic/ButtonLink.jsx";

const TeeCha = () => {
  return (
    <section id={"teecha"}>
        <h2 className="teecha-caption">
          <div className="teecha">{texts.teeCha}</div>
          <div className="home-tuition">{texts.homeTuition}</div>
        </h2>
        <div className="boxes">
          <div className="teecha-box">
          <div className="home-tuition-areas">{texts.homeTuitionAreas}</div>
          <div className="teecha-areas">
            <div className="col-1">
              <div className="category">Academic Tuition</div>
              {teeChaAreasLists.academics}
            </div>
            <div className="col-2">
              <div className="category">Skills Tuition</div>
              <div className="skills">
                <div className="fl">
                  <div className="sub-category">Foreign Languages</div>
                  {teeChaAreasLists.fl}
                </div>
                <div className="gs">
                  <div className="sub-category">Games & Sports</div>
                  {teeChaAreasLists.gs}
                </div>
              </div>
            </div>
          </div>
          <div id={'tuition-jobs'}>
            <ButtonLink link="https://catalogue.rabbii.co.ke" className="clients-btn" value="Learn more about Our Services"/>
          </div>
          <div className="teecha-info">
            {texts.homeTuitionInfo}
          </div>
        </div>
          <div id={'catalogue'}>
            <ButtonLink link="https://tuition-jobs.rabbii.co.ke" className="clients-btn" value="View Available Tuition Jobs"/>
          </div>
          <SignUpModal className="sign-up box" signUpText="Sign Up to Receive Our Price List" status="hidden"/>
        </div>
    </section>
  );
};

export default TeeCha;
