import React, { Component } from "react";
import "./App.css";
import HorizontalScreens from "./Componentes/MovableWindows/container/HorizontalScreens";
import HomePage from "./Componentes/HomePage/Container/HomePage";
import ContactPage from "./Componentes/ContactPage/Containers/ContactPage";
import WorksPage from "./Componentes/WorksPage/Containers/WorksPage";

class App extends Component {
  state = {
    screen: 2,
    num2: 0
  };
  selectScreenW1 = screen => {
    this.setState({ screen });
  };
  sum1 = () => {
    let screen = this.state.screen + 1;
    this.setState({ screen });
    // console.log(this.state.screen);
  };
  res1 = () => {
    let screen = this.state.screen - 1;
    this.setState({ screen });
    // console.log(this.state.screen);
  };
  selectScreenW2 = screen => {
    this.setState({ num2: screen });
  };

  render() {
    const element = (
      <div>
        <button onClick={this.res1}>back page</button>
        <button onClick={this.sum1}>next page</button>
      </div>
    );
    const element2 = (
      <div style={{ marginTop: "2em" }}>
        <button
          onClick={() => {
            this.selectScreenW2(0);
          }}
        >
          back page
        </button>
        <button
          onClick={() => {
            this.selectScreenW2(1);
          }}
        >
          next page
        </button>
      </div>
    );
    return (
      <div className="App">
        <HorizontalScreens screen={this.state.screen} frontScreen={element}>
          <ContactPage selectScreen={this.selectScreenW1} />
          <HomePage selectScreen={this.selectScreenW1} />

          {/* <HorizontalScreens screen={this.state.num2} frontScreen={element2}> */}
          <WorksPage />
          <div>pagina1</div>
          <div>pagina2</div>
          {/* </HorizontalScreens> */}
        </HorizontalScreens>
      </div>
    );
  }
}

export default App;
