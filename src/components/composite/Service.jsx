import React from "react";
import GetTutor from "./GetTutor";
import ImageWebp from "../../helpers/ImageWebp";

const Service = (props) => {
  return (
      <div className={'service'}>
          <ImageWebp
              src={props.jpeg}
              srcWebp={props.webp}
              className={'service-image'}
              alt={props.alt}
          />
        <div className={'text'}>
          <h2 className={'title'}>{props.title}</h2>
          <hr/>
          <p className={'desc'}>{props.desc[0]}</p>
          <p className={'desc'}>{props.desc[1]}</p>
          {props.list}
          <GetTutor link={props.link}/>
        </div>
      </div>
  )
};

export default Service;
