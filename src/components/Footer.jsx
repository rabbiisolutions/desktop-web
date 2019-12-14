import React from "react";
import Icon from "./basic/Icon";
import phone from "../icons/contacts/ic_round-perm-phone-msgphone.svg"
import whatsapp from "../icons/contacts/bx_bxl-whatsappwhatsapp.svg"
import mail from "../icons/contacts/bx_bx-mail-sendmail.svg"
import twitter from "../icons/social/circle-twitter.svg"
import youtube from "../icons/social/circle-youtube.svg"
import facebook from "../icons/social/circle-facebook.svg"
import linkedin from "../icons/social/circle-linkedin.svg"
import texts from "../constants/Texts";
import Logo from "./composite/Logo";


const Footer = () => {
  return (
      <footer>
        <div id="lighter">
          <div className="contacts">
            <div id="contacts-title">{texts.contacts}</div>
            <div id="contacts">
              <div id="mobile">
                <span className="icon-text">
                  <Icon src={phone} className="footer-icon" height={2.5} width={2.5}/>
                  <span>{texts.safaricom}</span>
                </span>
                <span className="icon-text">
                  <Icon src={whatsapp} className="footer-icon" height={2.5} width={2.5}/>
                  <span>{texts.telkom}</span>
                </span>
              </div>
              <div id="mail">
              <span className="icon-text">
                <Icon src={mail} className="footer-icon" height={3} width={2.5}/>
                <span>{texts.sema}</span>
              </span>
                <span className="icon-text">
                <Icon src={mail} className="footer-icon" height={3} width={2.5}/>
                <span>{texts.hr}</span>
              </span>
              </div>
            </div>
          </div>
          <div className="find-us">
              <div className="company-info">
                <Logo className="logo" height={7.6875}/>
                <p>
                  Rabbii TS is an education technology company that wants to see education transform
                  the society by empowering them to achieve their goals and dreams.
                </p>
              </div>
              <div id="find-us-title">{texts.findUs}</div>
              <div id="social">
              <a href="https://www.facebook.com/rabbiitech/" target="_blank" rel="noopener noreferrer">
                <Icon src={facebook} className="footer-icon" height={2.5} width={2.5}/>
              </a>
              <a href="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg" target="_blank" rel="noopener noreferrer">
                <Icon src={youtube} className="footer-icon" height={2.5} width={2.5}/>
              </a>
              <a href="https://twitter.com/RabbiiTech" target="_blank" rel="noopener noreferrer">
                <Icon src={twitter} className="footer-icon" height={2.5} width={2.5}/>
              </a>
              <a href="https://www.linkedin.com/company/Rabbii-technology-innovations-ltd/" target="_blank" rel="noopener noreferrer">
                <Icon src={linkedin} className="footer-icon" height={2.5} width={2.5}/>
              </a>
            </div>
          </div>
          <div id={'links'}>
            <div id="links-title">Links</div>
            <div className={'links'}>
              <a href={'https://privacy.rabbii.co.ke'}>Privacy Policy</a>
            </div>
          </div>
        </div>
        <div id="darken">
          <span className="copyright">&copy;&nbsp;{new Date().getFullYear()}&nbsp;Copyright:&nbsp;</span>
          <h1 className="company">&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;®&nbsp;</h1>
        </div>
      </footer>
  );
};

export default Footer;
