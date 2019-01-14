import React, { Component } from "react";
import HorizontalScreensLayout from "../component/HorizontalScreensLayout";
import FrontScreen from "../component/FrontScreen";

class HorizontalScreens extends Component {
  state = {
    screen: this.props.screen,
    maxScreen: 0,
    Left: 0
  };

  setScreen = screen => {
    let s = screen;
    //  limits the movement of the window
    if (s > this.state.maxScreen) {
      s = this.state.maxScreen;
    } else if (s < 0) {
      s = 0;
    }
    //  ---

    this.setState({
      Left: -100 * s + "vw",
      screen: s
    });
  };

  componentDidMount() {
    //  Set MaxScree
    let maxScreen = this.props.children.length - 1;
    //  set Windows position
    let Left = -100 * this.state.screen + "vw";
    this.setState({ Left, maxScreen });
  }
  componentWillReceiveProps(nextProps) {
    this.setScreen(nextProps.screen);
  }
  render() {
    let styleScreen = {
      left: this.state.Left
    };

    return (
      <HorizontalScreensLayout>
        <div className="window">
          {this.props.frontScreen && (
            <FrontScreen component={this.props.frontScreen} />
          )}

          <div className="screens" style={styleScreen}>
            {this.props.children.map((screen, index) => {
              let left = 100 * index + "vw";
              return (
                <div className="screen" style={{ left: left }}>
                  {screen}
                </div>
              );
            })}
          </div>
        </div>
      </HorizontalScreensLayout>
    );
  }
}

export default HorizontalScreens;
