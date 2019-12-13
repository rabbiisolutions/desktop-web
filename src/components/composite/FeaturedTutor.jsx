import React from "react";
import renderStars from "./Stars";


const FeaturedTutor = (props) => {
  return (
      <div className="featured-tutor" key={props.key}>
        <div className="top">
          <span className="featured-tutor">{props.name}</span>
          <span className="tutor-description">({props.description})</span>
        </div>
        <div className="comment">{props.comment}</div>
        <div className="bottom">
          <span className="areas">{props.areas}</span>
          <span className="stars">{renderStars({shade: props.stars.shade, height: 2, key: props.key})}</span>
        </div>
      </div>
  );
};

// Exporting the component
export default FeaturedTutor;