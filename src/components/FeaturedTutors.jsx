import FeaturedTutor from "./composite/FeaturedTutor";
import featuredTutors from "../constants/FeaturedTutors";
import texts from "../constants/texts";
import React from "react";
import featuredJ from "../images/featured.jpg";
import featuredW from "../images/featured.webp";
import ImageWebp from "../helpers/ImageWebp";


const FeaturedTutors = () => {
  return (
      <section id="featured" className={'section'}>
        <h1 className="section-title">{texts.featuredTutors}</h1>
        <div id={'featured-row'}>
          <div id="featured-tutors">
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
