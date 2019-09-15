import FeaturedTutor from "./sub-items/FeaturedTutor";
import featuredTutors from "../constants/featuredTutors";
import BackGround from "../helpers/backGround";
import texts from "../constants/texts";
import React from "react";


const FeaturedTutors = () => {
  return (
      <section className={"featured-" + BackGround()}>
        <div className="title">{texts.featuredTutors}</div>
        <div className="featured">
          {FeaturedTutor(featuredTutors[0])}
          {FeaturedTutor(featuredTutors[1])}
        </div>
      </section>
  )
};

export default FeaturedTutors;
