import React from "react";
import renderStars from "./Stars";


const mapComment = (commentObj) => {
  return (
      commentObj.map(comment => (
              <div>{comment}</div>
          )
      )
  )
};

const FeaturedTutor = (props) => {
  return (
      <div className="featured-tutor" key={props.key}>
        <div className="top">
          <a className="tutor-name" href={props.url} target="_blank" rel="noopener noreferrer">{props.name}</a>
          <span className="tutor-description">({props.description})</span>
        </div>
        <div className="comment">
          {
            typeof props.comment === "object" ?
                mapComment(props.comment) :
                props.comment
          }
        </div>
        <div className="bottom">
          <span className="areas">{props.areas}</span>
          <span className="stars">{renderStars({shade: props.stars.shade, height: 2, key: props.key})}</span>
        </div>
      </div>
  );
};

// Exporting the component
export default FeaturedTutor;
