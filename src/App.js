import React, { Component } from "react";
import "./App.css";
import MovableWindows from "./Componentes/MovableWindows/container/MovableWindows";
import ScreenMW from "./Componentes/MovableWindows/component/ScreemMW";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovableWindows tipo="Hor">
          <ScreenMW>otra cosa</ScreenMW>
          <ScreenMW>otra cosa</ScreenMW>
        </MovableWindows>
      </div>
    );
  }
}

export default App;
