import React, { Component } from "react";
import NavBarLayout from "../Layouts/NavBarLayout";
import HandLogo from "../../../Img/Hand0.svg";
// import HandIcon from "../../Widgets/handIcon";

class NavBar extends Component {
  state = {};
  goContact = () => {
    this.props.selectScreen(0);
  };
  goHome = () => {
    this.props.selectScreen(1);
  };
  goWorks = () => {
    this.props.selectScreen(2);
  };
  render() {
    return (
      <NavBarLayout>
        <button className="btn" onClick={this.goContact}>
          Contacto
        </button>
        <button className="btn navHome" onClick={this.goHome}>
          {/* <i className="fas fa-home" /> */}
          {/* <HandIcon /> */}
          i
          <img src={HandLogo} className="handIcon" />
        </button>
        <button className="btn" onClick={this.goWorks}>
          Trabajos
        </button>
      </NavBarLayout>
    );
  }
}

export default NavBar;
