import Icon from "./basic/Icon";
import howToGetATutor from "../icons/8 1.svg"
import texts from "../constants/texts";
import React from "react";

const HowToGet = () => {
  return (
      <section id={'how-teecha-works'}>
        <h4 className={'section-title'}>{texts.gettingATutor}</h4>
        <div className={'how-icon'}>
          <Icon src={howToGetATutor} height={'100%'} width={'100%'} units={''}/>
        </div>
      </section>
  );
};

export default HowToGet;
