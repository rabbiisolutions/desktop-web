import clientReviews from "../constants/Reviews";
import Review from "./composite/Review";
import React from "react";
import texts from "../constants/Texts";
import reviewsJ from "../images/reviews.jpg";
import reviewsW from "../images/reviews.webp";
import ImageWebp from "../helpers/ImageWebp";

const Reviews = () => {
  return (
      <section id={"reviews"}>
        <ImageWebp
            src={reviewsJ}
            srcWebp={reviewsW}
            className={'reviews-image'}
            alt={'joyous-client'}
        />
        <h2 className="section-title">{texts.reviews}</h2>
        <div className="reviews">
          <div className={'row'}>
            {Review(clientReviews[0])}
            {Review(clientReviews[1])}
          </div>
          <div className={'row'}>
            {Review(clientReviews[2])}
            {Review(clientReviews[3])}
          </div>
        </div>
      </section>
  )
};

export default Reviews;
