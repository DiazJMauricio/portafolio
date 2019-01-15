import React, { Component } from "react";
import HomePageLayout from "../Layauts/HomePageLayout";
import HomeTitle from "../Layauts/HomeTitle";
import HomeHands from "../Layauts/HomeHands";
import HomeButtons from "../Layauts/HomeButtons";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <HomePageLayout>
        <HomeTitle />
        <HomeHands />
        <HomeButtons selectScreen={this.props.selectScreen} />
      </HomePageLayout>
    );
  }
}

export default HomePage;
