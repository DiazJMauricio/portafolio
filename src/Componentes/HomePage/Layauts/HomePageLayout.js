import React from "react";
import "./HomePage.css";
const HomePageLayout = props => {
  return (
    <div className="HomePage" id="/">
      {props.children}
    </div>
  );
};

export default HomePageLayout;
