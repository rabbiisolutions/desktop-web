import React from "react";
import Logo from "./composite/Logo";
import Icon from "./basic/Icon";
import toggle from "../icons/menu.svg"
import Button from "./basic/Button";
import texts from "../constants/Texts";
import signUpHandler from "../events/SignUpModal";
import menuToggle from "../events/MenuToggle";
import overlayAction from "../events/OverlayActions";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesShown: false
    };
  }

  servicesToggle(e) {
      overlayAction(document.getElementsByClassName('our-services')[0]);
  };

  menuHandler(e) {
    const target = e.target;
    const navItems = document.getElementsByClassName('nav-item');
    for (let i=0;i<navItems.length;i++) {
      navItems[i].classList.remove('active');
    }
    target.classList.toggle('active');
    this.setState({active: target});
    target.childNodes[1].classList.toggle('hidden'); // shows the active bar
  }

  render() {
    return (
      <nav id="nav-bar">
        <Logo className="logo" height={3} units={'rem'}/>
        <span className="nav">
            <a className="nav-item active" href="#landing-image" onClick={e => this.menuHandler(e)}>
                <span className={'text'}>{texts.menuItems[0]}</span>
              <span className={'active'}>&nbsp;</span>
            </a>
            <a className="nav-item" href="https://catalogue.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[1]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href="https://tuition-jobs.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[2]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item"  href="https://about.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[3]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
            <a className="nav-item" href="https://trending.rabbii.co.ke/">
                <span className={'text'}>{texts.menuItems[4]}</span>
              <span className={'active hidden'}>&nbsp;</span>
            </a>
        </span>
        <Button value={texts.signUp} onClick={e => signUpHandler(e)}/>
        <Icon src={toggle} className="toggle" height={2.25} width={5} onClick={e => menuToggle(e)}/>
      </nav>
    );
  }
}

export default NavBar;
