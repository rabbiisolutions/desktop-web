import texts from "../constants/texts";
import ButtonLink from "./utils/ButtonLink";
import React from "react";
import Icon from "./utils/icon";
import facebook from "../icons/social/facebook-f-brands.svg";
import twitter from "../icons/social/twitter-brands.svg";
import webpIsSupported from "../helpers/webp";
import BackGround from "../helpers/backGround";
import didYouKnowWebp from "../images/webp/did-you-know.webp";
import didYouKnowJpeg from "../images/jpeg/did-you-know.jpg";


const Trending = () => {
  return (
      <div className={"trending-" + BackGround()}>
        <div className="trending-overlay">
          <div className="trending-info">
            <div className="did-you-know">{texts.didYouKnow}</div>
            <div className="advert">{texts.weekly}</div>
            <div className="check-out">{texts.checkOut}</div>
            <div className="social-links">
              <ButtonLink href="" className="trends facebook" value="facebook"
                          icon={<Icon src={facebook} className="trend-icon" height={1.5}/>}/>
              <ButtonLink href="" className="trends twitter" value="twitter"
                          icon={<Icon src={twitter} className="trend-icon" height={1.5}/>}/>
            </div>
          </div>
        <div className="trending-video">
          <img src={webpIsSupported() ? didYouKnowWebp: didYouKnowJpeg} alt="did-you-know"
               className="did-you-know-image" width={257} height={202}/>
        </div>
        </div>
      </div>
  );
};

export default Trending;
