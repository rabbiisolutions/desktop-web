import React from "react";
import texts from "../constants/texts";
import teeChaAreasLists from "./sub-items/TeeChaAreasList";
import BackGround from "../helpers/backGround";

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
              <div className="category">{texts.academics}</div>
              {teeChaAreasLists.academics}
              <div className="category">{texts.thi}</div>
              {teeChaAreasLists.thi}
              <div className="category">{texts.technology}</div>
              {teeChaAreasLists.technology}
            </div>
            <div className="col-2">
              <div className="category">{texts.languages}</div>
              {teeChaAreasLists.languages}
              <div className="category">{texts.counselling}</div>
              {teeChaAreasLists.counselling}
              <div className="category">{texts.sports}</div>
              {teeChaAreasLists.sports}
              <div className="category">{texts.university}</div>
              {teeChaAreasLists.university}
            </div>
          </div>
          <div className="teecha-info">
            {texts.homeTuitionInfo}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeeCha;
