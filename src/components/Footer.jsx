import React from "react";
import Icon from "./basic/Icon";
import phone from "../assets/icons/contacts/ic_round-perm-phone-msgphone.svg"
import whatsapp from "../assets/icons/contacts/bx_bxl-whatsappwhatsapp.svg"
import mail from "../assets/icons/contacts/bx_bx-mail-sendmail.svg"
import twitter from "../assets/icons/social/circle-twitter.svg"
import youtube from "../assets/icons/social/circle-youtube.svg"
import facebook from "../assets/icons/social/circle-facebook.svg"
import linkedin from "../assets/icons/social/circle-linkedin.svg"
import texts from "../constants/texts";


const Footer = () => {
  return (
      <footer>
        <div id="lighter">
          <div id="contacts" className={'col'}>
            <div className="footer-title" title={'our communication channels'}>{texts.contacts}</div>
            <div id={'contact-list'}>
              <span className="icon-text">
                <Icon src={phone} className="footer-icon" height={3} width={3} units={'rem'}/>
                <span>{texts.safaricom}</span>
              </span>
              <span className="icon-text">
                <Icon src={whatsapp} className="footer-icon" height={3} width={3} units={'rem'}/>
                <span>{texts.telkom}</span>
              </span>
              <span className="icon-text">
                <Icon src={mail} className="footer-icon" height={3} width={3} units={'rem'}/>
                <span><a href={'mailto:' + texts.sema} title={'send us an email'}>{texts.sema}</a></span>
              </span>
            </div>
          </div>
          <div id="company-info" className={'col'}>
            <div className="footer-title" title={'important links'}>{texts.links}</div>
            <div className={'inner-div'}>
              <a href={'https://forms.gle/eNN6kvmHMXpM2mi68'} title={'fill in your class' +
              ' attendance details'}>{texts.dot}Class Attendance</a>
              <a href={'/CORONAVIRUS.pdf'}
                 title={'learn about the facts and myths of the corona virus'}>
                {texts.dot}Corona Virus Demystified</a>
            </div>
          </div>
          <div id="find-us" className={'col'} title={'get to know us via social media'}>
            <div className="footer-title">{texts.findUs}</div>
            <div id="social">
              <a href="https://www.facebook.com/rabbiitech/" target="_blank" rel="noopener noreferrer" title={'visit our facebook page'}>
                <Icon src={facebook} className="footer-icon social" height={3} width={3} units={'rem'}/>
              </a>
              <a href="https://www.youtube.com/channel/UC5dpUzgKA46Iuh8r9ni1Syg" target="_blank" rel="noopener noreferrer" title={'visit our youtube channel'}>
                <Icon src={youtube} className="footer-icon social" height={3} width={3} units={'rem'}/>
              </a>
              <a href="https://twitter.com/RabbiiTech" target="_blank" rel="noopener noreferrer" title={'view our twitter page'}>
                <Icon src={twitter} className="footer-icon social" height={3} width={3} units={'rem'}/>
              </a>
              <a href="https://www.linkedin.com/company/Rabbii-technology-innovations-ltd/" target="_blank" rel="noopener noreferrer" title={'view our linkedin profile'}>
                <Icon src={linkedin} className="footer-icon social" height={3} width={3} units={'rem'}/>
              </a>
            </div>
          </div>
        </div>
        <div id="darken">
          <a href={'https://privacy.rabbii.co.ke'} title={'read our privacy policy'}>Privacy Policy</a>
          <h1 className="copyright">&copy;&nbsp;Rabbii&nbsp;Technology&nbsp;Solutions&nbsp;{new Date().getFullYear()}</h1>
        </div>
      </footer>
  );
};

export default Footer;
