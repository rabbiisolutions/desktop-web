import Icon from "./basic/Icon";
import howToGetATutor from "../assets/icons/get-a-tutor.svg"
import texts from "../constants/texts";
import React from "react";

const HowToGet = () => {
  return (
      <section id={'how-teecha-works'}>
        <h4 className={'section-title'}>{texts.gettingATutor}</h4>
        <div className={'how-icon'}>
          <Icon src={howToGetATutor} height={'100%'} width={'100%'} units={''}/>
        </div>
        <a href={'https://payment.rabbii.co.ke'} className={'learn'}>Learn more about payment and pricing</a>
      </section>
  );
};

export default HowToGet;
