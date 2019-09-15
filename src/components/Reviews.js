import clientReviews from "../constants/reviews";
import Review from "./sub-items/Review";
import React from "react";
import BackGround from "../helpers/backGround";
import texts from "../constants/texts";

const Reviews = () => {
  return (
      <section className={"reviews-" + BackGround()}>
        <div className="title">{texts.reviews}</div>
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