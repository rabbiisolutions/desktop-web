import React from 'react';
import pilotJpeg from "../images/reviews/slide-1.jpg";
import pilotWebp from "../images/reviews/slide-1.webp";
import engineerJpeg from "../images/reviews/slide-2.jpg";
import engineerWebp from "../images/reviews/slide-2.webp";
import saxJpeg from "../images/reviews/slide-3.jpg";
import saxWebp from "../images/reviews/slide-3.webp";
import photographyJpeg from "../images/reviews/slide-4.jpg";
import photographyWebp from "../images/reviews/slide-4.webp";
import ImageWebp from "../helpers/ImageWebp";
import clientReviews from "../constants/reviews";
import Review from "./composite/Review";
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import texts from "../constants/texts";


const fadeImages = [
  {jpeg: pilotJpeg, webp: pilotWebp},
  {jpeg: engineerJpeg, webp: engineerWebp},
  {jpeg: saxJpeg, webp: saxWebp},
  {jpeg: photographyJpeg, webp: photographyWebp},
];

const Reviews = () => {
  const CarouselUI = ({ position, total, handleClick, children }) => (
      <section id={'reviews-cont'}>
        <div id={'dots'}>
          {Array(...Array(total)).map( (val, index) =>
              <span className={'dot'} key={index} onClick={handleClick} data-position={index}>
                {index === position ? '● ' : '○ ' }
              </span>
          )}
        </div>
        <div id={'children'}>
          {children}
        </div>
      </section>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
      <section id={'reviews'}>
        <h4 className={'section-title'}>{texts.reviews}</h4>
        <Carousel>
          <Slide right>
            <div>
              <div className={'image-container'}>
                <ImageWebp src={fadeImages[0].jpeg} srcWebp={fadeImages[0].webp} className={'review-image'}/>
              </div>
              {Review(clientReviews[0])}
            </div>
          </Slide>
          <Slide right>
            <div>
              <div className={'image-container'}>
                <ImageWebp src={fadeImages[1].jpeg} srcWebp={fadeImages[1].webp} className={'review-image'}/>
              </div>
              {Review(clientReviews[3])}
            </div>
          </Slide>
          <Slide right>
            <div>
              <div className={'image-container'}>
                <ImageWebp src={fadeImages[2].jpeg} srcWebp={fadeImages[2].webp} className={'review-image'}/>
              </div>
              {Review(clientReviews[1])}
            </div>
          </Slide>
          <Slide right>
            <div>
              <div className={'image-container'}>
                <ImageWebp src={fadeImages[3].jpeg} srcWebp={fadeImages[3].webp} className={'review-image'}/>
              </div>
              {Review(clientReviews[2])}
            </div>
          </Slide>
        </Carousel>
      </section>
  );
};

export default Reviews;
