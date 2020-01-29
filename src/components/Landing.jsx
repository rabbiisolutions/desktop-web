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
import Jpeg6 from "../images/carousel/6.png";
import Webp6 from "../images/carousel/6.webp";
import Jpeg7 from "../images/carousel/7.png";
import Webp7 from "../images/carousel/7.webp";
import Jpeg8 from "../images/carousel/8.png";
import Webp8 from "../images/carousel/8.webp";
import Jpeg9 from "../images/carousel/9.png";
import Webp9 from "../images/carousel/9.webp";
import Jpeg10 from "../images/carousel/10.png";
import Webp10 from "../images/carousel/10.webp";
import ImageWebp from "../helpers/ImageWebp";
import { Zoom } from "react-slideshow-image";
import texts from "../constants/texts";
import ButtonLink from "./basic/ButtonLink";

const set1 = [
  {jpeg: Jpeg1, webp: Webp1},
  {jpeg: Jpeg3, webp: Webp3},
  {jpeg: Jpeg5, webp: Webp5},
  {jpeg: Jpeg9, webp: Webp9},
  {jpeg: Jpeg7, webp: Webp7},
];

const set2 = [
  {jpeg: Jpeg2, webp: Webp2},
  {jpeg: Jpeg4, webp: Webp4},
  {jpeg: Jpeg6, webp: Webp6},
  {jpeg: Jpeg10, webp: Webp10},
  {jpeg: Jpeg8, webp: Webp8},
];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false
};


const Landing = () => {
  return (
      <div className="slide-container" id={'start'}>
        <Zoom {...zoomOutProperties}>
          {
            set1.map((each, index) => <ImageWebp key={index} style={{width: "100%"}} src={each.jpeg} srcWebp={each.webp} className={'slide-image'}/>)
          }
        </Zoom>
        <div id={'greeting'}>
          <h2>achieve your potential</h2>
          <p>Providing you with a personal tutor to help you turn your dreams into reality.</p>
          <div id={'dark-box'}>
            <p>Sign up to see our price list <span>(client only*)</span>.</p>
            <ButtonLink value={texts.signUp} link={"https://forms.gle/3JZCSM2JJTPLTjP57"} className="services"/>
          </div>
        </div>
        <Zoom {...zoomOutProperties}>
          {
            set2.map((each, index) => <ImageWebp key={index} style={{width: "100%"}} src={each.jpeg} srcWebp={each.webp} className={'slide-image'}/>)
          }
        </Zoom>
      </div>
  )
};
export default Landing;
