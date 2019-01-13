import React, { Component } from "react";
import MovableWindowsLayout from "../component/MovableWindowsLayout";

class MovableWindows extends Component {
  state = {
    screen: 1,
    maxScreen: 2,
    width: 0,
    marginLeft: 0
  };

  cambiarScreen = () => {
    if (this.state.screen === this.state.maxScreen) {
      this.setState({ screen: 0 });
    } else {
      let s = this.state.screen + 1;
      this.setState({ screen: s });
    }

    this.setState({ marginLeft: -100 * this.state.screen + "vw" });
  };

  componentWillMount() {
    //    Remplazar por [this.props.children.lenght]                                  [*]
    let width = 100 * 3 + "vw";

    let marginLeft = -100 * this.state.screen + "vw";
    this.setState({ width, marginLeft });
  }

  render() {
    let styleScreen = {
      width: this.state.width,
      marginLeft: this.state.marginLeft
    };

    return (
      <MovableWindowsLayout>
        <div className="windows">
          <div className="Buttons">
            <p>holas</p>
            <button onClick={this.cambiarScreen}>nextPage</button>
          </div>
          
          <div className="screens" style={styleScreen}>
            <div className="screen">
              <p>pagina 1</p>
              <button onClick={this.cambiarScreen}>nextPage</button>
            </div>
            <div className="screen">
              <p>pagina 2</p>
              <button onClick={this.cambiarScreen}>nextPage</button>
            </div>
            <div className="screen">
              <p>pagina 3</p>
              <button onClick={this.cambiarScreen}>nextPage</button>
            </div>
          </div>
        </div>
      </MovableWindowsLayout>
    );
  }
}

export default MovableWindows;
