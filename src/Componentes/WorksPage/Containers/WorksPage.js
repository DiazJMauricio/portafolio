import React, { Component } from "react";
import WorkPageLayout from "../Layouts/WorksPageLayout";
import Work from "../Layouts/Work";

class WorksPage extends Component {
  state = {};
  mostrarMas = () => {
    console.log("scrollTo");
    this.WorksPage.scrollTo({ left: 10000, behavior: "smooth" });
  };
  mostrarMenos = () => {
    console.log("scrollTo");
    this.WorksPage.scrollTo({ left: 10000, behavior: "smooth" });
  };
  render() {
    return (
      <WorkPageLayout>
        <div
          className="WorksPage"
          ref={div => {
            this.WorksPage = div;
          }}
        >
          <Work handleClick={this.mostrarMas} pageRef={this.WorksPage}>
            <div>pag1-1</div>
            <div>pag1-2</div>
          </Work>
          <Work handleClick={this.mostrarMas}>
            <div>pag2-1</div>
            <div>pag2-2</div>
          </Work>
          <Work handleClick={this.mostrarMas}>
            <div>pag3-1</div>
            <div>pag3-2</div>
          </Work>
        </div>
      </WorkPageLayout>
    );
  }
}

export default WorksPage;
