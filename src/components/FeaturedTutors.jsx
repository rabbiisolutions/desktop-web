import FeaturedTutor from "./composite/FeaturedTutor";
import featuredTutors from "../constants/FeaturedTutors";
import texts from "../constants/Texts";
import React from "react";
import featuredJ from "../images/featured.jpg";
import featuredW from "../images/featured.webp";
import ImageWebp from "../helpers/ImageWebp";


const FeaturedTutors = () => {
  return (
      <section id="featured">
        <h1 className="title">{texts.featuredTutors}</h1>
        <div id={'featured-row'}>
          <div className="featured-tutors">
            {FeaturedTutor(featuredTutors[0])}
            {FeaturedTutor(featuredTutors[1])}
          </div>
          <ImageWebp
              src={featuredJ}
              srcWebp={featuredW}
              className={'featured-image'}
              alt={'joyous-tutor'}
          />
        </div>
      </section>
  )
};

export default FeaturedTutors;