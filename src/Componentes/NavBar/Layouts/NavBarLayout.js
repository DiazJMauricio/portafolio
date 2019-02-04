import React from "react";
import "./NavBar.css";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  LinkedIn
} from "../../Widgets/SocialLinks";

const NavBarLayout = props => {
  return (
    <div className="NavBar">
      <div className="navBarButtons">
        {props.children}

        <div className="navSocialLinks">
          <Twitter url="https://twitter.com/DizMauri" />
          <Facebook url="https://www.facebook.com/profile.php?id=100033611054490" />
          <Instagram url="https://www.instagram.com/ryuma_d/" />
          <Github url="https://github.com/DiazJMauricio" />
          <LinkedIn url="https://www.linkedin.com/in/mauricio-j-diaz-671b95163/" />
        </div>
      </div>
    </div>
  );
};

export default NavBarLayout;
