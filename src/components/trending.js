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
import trendIcon from "../icons/stat.svg";


const Trending = () => {
  return (
      <div className={"trending-" + BackGround()} id="trending">
        <div className='trending-title'>
          <span className="text">{texts.trending}</span>
          <Icon src={trendIcon} height={1} width={1.5}/>
        </div>
        <div className="trending-overlay">
          <div className="trending-info">
            <div className="did-you-know">{texts.didYouKnow}</div>
            <div className="advert">{texts.weekly}</div>
            <div className="check-out">{texts.checkOut}</div>
            <div className="social-links">
              <ButtonLink link="https://www.facebook.com/pg/rabbiitech/posts/" className="trends facebook" value="facebook"
                          icon={<Icon src={facebook} className="trend-icon" height={1.5}/>}/>
              <ButtonLink link="https://twitter.com/RabbiiTech/media" className="trends twitter" value="twitter"
                          icon={<Icon src={twitter} className="trend-icon" height={1.5}/>}/>
            </div>
          </div>
        <div className="trending-video">
          <iframe height="400" src="https://www.youtube.com/embed/h0eIfbQSMnI?loop=1&amp;playlist=aHA_UjXVQT"
                  frameBorder="0" className="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen width="600"/>
        </div>
        </div>
      </div>
  );
};

export default Trending;
