import FeaturedTutor from "./sub-items/FeaturedTutor";
import featuredTutors from "../constants/featuredTutors";
import texts from "../constants/texts";
import React from "react";


const FeaturedTutors = () => {
  return (
      <section className="featured">
        <div className="title">{texts.featuredTutors}</div>
        <div className="featured-tutors">
          {FeaturedTutor(featuredTutors[0])}
          {FeaturedTutor(featuredTutors[1])}
        </div>
      </section>
  )
};

export default FeaturedTutors;
