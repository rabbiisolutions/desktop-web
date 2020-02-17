import React from "react";
import texts from "../constants/texts";
import menuToggle from "../events/MenuToggle";


class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      servicesOpen: false
    };
  }

  menuHandler(e) {
    const target = e.target;
    if (this.state.active)
      this.toggleActive(this.state.active);
    this.toggleActive(target);
    this.setState({active: target});
    if (target.classList[0] === 'menu-sub-item')
      this.setState( {servicesOpen: !this.state.servicesOpen});
    else {
      this.setState( {servicesOpen: false});
    }
    menuToggle(target);
  }

  toggleActive(item) {
    item.classList.toggle('active');
  }

  render() {
    return (
        <nav className="menu hidden">
          <div className="side-bar">
            <div className="menu-title">{texts.menuTitle}</div>
            <div className="menu-items">
              <a className="menu-item" href={texts.menuLinks[0]}>
                {texts.menuItems[0]}
              </a>
              <a className="menu-item" href={texts.menuLinks[1]}>
                {texts.menuItems[1]}
              </a>
              <a className="menu-item" href={texts.menuLinks[2]}>
                {texts.menuItems[2]}
              </a>
              <a className="menu-item" href={texts.menuLinks[3]}>
                {texts.menuItems[3]}
              </a>
              <a className="menu-item" href={texts.menuLinks[4]}>
                {texts.menuItems[4]}
              </a>
            </div>
          </div>
        </nav>
    );
  }
}

export default SideBar;
