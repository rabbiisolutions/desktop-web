import React from "react";
import Jpeg1 from "../images/carousel/1.png";
import Webp1 from "../images/carousel/1.webp";
import Jpeg2 from "../images/carousel/2.png";
import Webp2 from "../images/carousel/2.webp";
import Jpeg3 from "../images/carousel/3.png";
import Webp3 from "../images/carousel/3.webp";
import Jpeg4 from "../images/carousel/4.png";
import Webp4 from "../images/carousel/4.webp";
import Jpeg5 from "../images/carousel/5.png";
import Webp5 from "../images/carousel/5.webp";
import ImageWebp from "../helpers/ImageWebp";
import { Zoom } from "react-slideshow-image";
import texts from "../constants/Texts";

const images = [
  {jpeg: Jpeg2, webp: Webp2},
  {jpeg: Jpeg3, webp: Webp3},
  {jpeg: Jpeg4, webp: Webp4},
  {jpeg: Jpeg5, webp: Webp5},
  {jpeg: Jpeg1, webp: Webp1},
];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};


const Landing = () => {
  return (
      <div className="slide-container" id={'start'}>
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <ImageWebp key={index} style={{width: "100%"}} src={each.jpeg} srcWebp={each.webp} className={'slide-image'}/>)
          }
        </Zoom>
        <div id={'vision'}>{texts.tagLine}</div>
      </div>
  )
};
export default Landing;
