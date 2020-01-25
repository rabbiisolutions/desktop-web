import React from "react";
import renderStars from "../composite/Stars";

const Review = (props) => {
  return (
      <div className="review" key={props.key}>
        <div className="reviewer">
          <span>{props.name}</span>
        </div>
        <div className="comment">
          <div className={'quotation'}>"</div>
          <div className={'text'}>{props.comment}</div>
        </div>
        <div className="desc">
          <span>{props.description}</span>
        </div>
        <div className="stars">{renderStars({shade: props.stars.shade, height: 2, key: props.stars.key})}</div>
      </div>
  );
};

// Exporting the component
export default Review;
