import React, { Component } from "react";
import "./App.css";
import HorizontalScreens from "./Componentes/MovableWindows/container/HorizontalScreens";
import HomePage from "./Componentes/HomePage/Container/HomePage";

class App extends Component {
  state = {
    screen: 1,
    num2: 0
  };
  sum1 = () => {
    let screen = this.state.screen + 1;
    this.setState({ screen });
    console.log(this.state.screen);
  };
  sum2 = () => {
    let num2 = this.state.num2 + 1;
    this.setState({ num2 });
    console.log(this.state.num2);
  };

  render() {
    const element = <button onClick={this.sum1}>next page</button>;
    const element2 = <button onClick={this.sum2}>next page2</button>;
    return (
      <div className="App">
        <HorizontalScreens screen={this.state.screen} frontScreen={element}>
          <div>otra cosa</div>
          <HomePage />
          <div>otra cosa2</div>
          <div>Ultima otra cosa</div>
          <HorizontalScreens screen={this.state.num2} frontScreen={element2}>
            <div>otra cosa4</div>
            <div>Ultima otra cosa4</div>
          </HorizontalScreens>
        </HorizontalScreens>
      </div>
    );
  }
}

export default App;
