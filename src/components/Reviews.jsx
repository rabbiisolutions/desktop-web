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
        <h2 className="title">{texts.reviews}</h2>
        <div className="reviews">
          {Review(clientReviews[0])}
          {Review(clientReviews[1])}
          {Review(clientReviews[2])}
          {Review(clientReviews[3])}
        </div>
      </section>
  )
};

export default Reviews;
