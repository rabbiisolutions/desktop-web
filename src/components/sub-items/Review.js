import React from "react";
import renderStars from "../utils/stars";

const Review = (props) => {
  return (
      <div className="review" key={props.key}>
        <div className="reviewer">
          <span>{props.name}</span>, <span>{props.description}</span>
        </div>
        <div className="stars">{renderStars({shade: props.stars.shade, height: 1, key: props.key})}</div>
        <div className="comment">{props.comment}</div>
      </div>
  );
};

// Exporting the component
export default Review;
