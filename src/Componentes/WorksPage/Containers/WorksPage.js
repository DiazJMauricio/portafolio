import React, { Component } from "react";
import Work from "../Layouts/Work";

import "../Layouts/WorkPage.css";

class WorksPage extends Component {
  state = { nWheel: 0 };

  verMas = () => {
    this.props.selectScreen(3);
  };
  nextWork = () => {
    let Work = this.props.work;
    Work++;
    Work = Work > 3 ? 1 : Work;
    this.changeWork(Work);
  };

  changeWork = Work => {
    this.props.changeWork(Work);
  };

  handleScroll = e => {
    let nWheel = this.state.nWheel;
    let Work = this.props.work;
    e.deltaY > 0 ? nWheel++ : nWheel--;
    if (nWheel > 2) {
      Work++;
      nWheel = 0;
    } else if (nWheel < 0) {
      Work--;
      nWheel = 2;
    }
    Work = Work > 3 ? 1 : Work < 1 ? 3 : Work;
    this.changeWork(Work);
    this.setState({ nWheel });
  };

  render() {
    return (
      <div
        className="WorksPage"
        ref={div => {
          this.WorksPage = div;
        }}
      >
        <Work verMenos={this.verMenos} handleScroll={this.handleScroll}>
          <div className="presentationContent">
            {/* Titulos */}
            <div className="Titulos">
              <div>
                <h1>Titulo</h1>
                <h4>Subtitulo de algo</h4>
              </div>
            </div>

            {/* Pantallas */}
            <div className="workDevises">
              <div className="deviseContent">
                <div className="desktop">
                  <div className="border">desktop</div>
                </div>
                <div className="mobile">
                  <div className="border">mobile</div>
                </div>
              </div>
              <div className="buttonExplorar">
                <button className="btn explorar" onClick={this.verMas}>
                  Explorar <i className="fas fa-arrow-right" />
                </button>
              </div>
            </div>
            {/* PageMarks */}
            <div className="pageMarks">
              <div
                className={`check ${this.props.work === 1 ? "active" : "off"}`}
                onClick={() => {
                  this.changeWork(1);
                }}
              />
              <div
                className={`check ${this.props.work === 2 ? "active" : "off"}`}
                onClick={() => {
                  this.changeWork(2);
                }}
              />
              <div
                className={`check ${this.props.work === 3 ? "active" : "off"}`}
                onClick={() => {
                  this.changeWork(3);
                }}
              />
            </div>
            {/* NextWork */}
            <div className="nextWorkButton">
              <button className="btn" onClick={this.nextWork}>
                Mas Trabajos
              </button>
            </div>
          </div>
        </Work>
      </div>
    );
  }
}

export default WorksPage;
