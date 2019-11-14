import React from "react";
import texts from "../constants/texts";
import teeChaAreasLists from "./sub-items/TeeChaAreasList";
import BackGround from "../helpers/backGround";
import SignUpModal from "./signUpModal";

const TeeCha = () => {
  return (
    <section className={"teecha-" + BackGround()}>
      <div id="teecha">
        <div className="teecha-caption">
          <div className="teecha">{texts.teeCha}</div>
          <div className="home-tuition">{texts.homeTuition}</div>
        </div>
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
                  <div className="category">Foreign Languages</div>
                  {teeChaAreasLists.fl}
                </div>
                <div className="gs">
                  <div className="category">Games & Sports</div>
                  {teeChaAreasLists.gs}
                </div>
              </div>
            </div>
          </div>
          <div className="teecha-info">
            {texts.homeTuitionInfo}
          </div>
        </div>
        <SignUpModal className="sign-up div" signUpText="Sign Up to Receive Our Price List"/>
      </div>
    </section>
  );
};

export default TeeCha;
