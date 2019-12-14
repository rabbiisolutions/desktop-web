import React from "react";
import renderStars from "./Stars";

const Review = (props) => {
  return (
      <div className="review" key={props.key}>
        <div className="reviewer">
          <a href={props.social.url} target="_blank" rel="noopener noreferrer">
            <span className={'reviewer-name'}>{props.name}</span>
          </a>
          <span className={'reviewer-desc'}>{props.description}</span>
        </div>
        <div className="stars">{renderStars({shade: props.stars.shade, height: 2, key: props.key})}</div>
        <div className="comment">{props.comment}</div>
      </div>
  );
};

// Exporting the component
export default Review;
