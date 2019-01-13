import React, { Component } from "react";
import "./App.css";
import HorizontalScreens from "./Componentes/MovableWindows/container/HorizontalScreens";

class App extends Component {
  state = {
    num: 0
  };
  sum1 = () => {
    let num = this.state.num + 1;
    this.setState({ num });
    console.log(this.state.num);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.sum1}>sumar</button>
        <HorizontalScreens screen={this.state.num}>
          <div>otra cosa</div>
          <div>otra cosa2</div>
          <div>Ultima otra cosa</div>
        </HorizontalScreens>
      </div>
    );
  }
}

export default App;
