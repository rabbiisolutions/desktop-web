import FeaturedTutor from "./sub-items/FeaturedTutor";
import featuredTutors from "../constants/FeaturedTutors";
import texts from "../constants/Texts";
import React from "react";


const FeaturedTutors = () => {
  return (
      <section className="featured">
        <h1 className="title">{texts.featuredTutors}</h1>
        <div className="featured-tutors">
          {FeaturedTutor(featuredTutors[0])}
          {FeaturedTutor(featuredTutors[1])}
        </div>
      </section>
  )
};

export default FeaturedTutors;
