import React from "react";
import renderStars from "./Stars";
import Icon from "../basic/Icon";

const Review = (props) => {
  return (
      <div className="review" key={props.key}>
        <div className="reviewer">
          <span>{props.name}</span>, <span>{props.description}</span>
          <span className="icon-link">
            <a href={props.social.url} target="_blank" rel="noopener noreferrer">
                <Icon src={props.social.icon} className={props.social.color} height={1.5} width={1.5}/>
              </a>
          </span>
        </div>
        <div className="stars">{renderStars({shade: props.stars.shade, height: 2, key: props.key})}</div>
        <div className="comment">{props.comment}</div>
      </div>
  );
};

// Exporting the component
export default Review;
