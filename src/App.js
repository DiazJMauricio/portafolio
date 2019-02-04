import React, { Component } from "react";
import "./App.css";
import HorizontalScreens from "./Componentes/MovableWindows/container/HorizontalScreens";
import HomePage from "./Componentes/HomePage/Container/HomePage";
import ContactPage from "./Componentes/ContactPage/Containers/ContactPage";
import WorksPage from "./Componentes/WorksPage/Containers/WorksPage";
import NavBar from "./Componentes/NavBar/Containers/NavBar";
import WorkInfo from "./Componentes/WorkInfo/Containers/WorkInfo";

class App extends Component {
  state = {
    screen: 1,
    work: 1
  };
  selectScreen = screen => {
    this.setState({ screen });
  };
  changeWork = work => {
    this.setState({ work });
  };
  render() {
    const element = <NavBar selectScreen={this.selectScreen} />;

    return (
      <div className="App">
        <HorizontalScreens screen={this.state.screen} frontScreen={element}>
          <ContactPage selectScreen={this.selectScreen} />
          <HomePage selectScreen={this.selectScreen} />
          <WorksPage
            selectScreen={this.selectScreen}
            work={this.state.work}
            changeWork={this.changeWork}
          />

          <WorkInfo
            selectScreen={this.selectScreen}
            work={this.state.work}
            changeWork={this.changeWork}
          />
        </HorizontalScreens>
      </div>
    );
  }
}

export default App;
