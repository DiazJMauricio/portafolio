import React, { Component } from "react";
import WorkInfoLayout from "../Layouts/WorkInfoLayout";
import Work1 from "../Layouts/Works/Work1";
import Work2 from "../Layouts/Works/Work2";
import Work3 from "../Layouts/Works/Work3";

import CSSTransitionGroup from "react-addons-css-transition-group";

class WorkInfo extends Component {
  state = {};
  verMenos = () => {
    this.props.selectScreen(2);
  };

  nextWork = () => {
    let Work = this.props.work;
    Work++;
    Work = Work > 3 ? 1 : Work;
    this.props.changeWork(Work);
  };
  showWork = () => {
    switch (this.props.work) {
      case 1:
        return <Work1 />;
      case 2:
        return <Work2 />;
      case 3:
        return <Work3 />;
      default:
        return <Work1 />;
    }
  };

  render() {
    let trabajo = this.showWork();
    return (
      <div>
        <CSSTransitionGroup
          transitionName="workInfoFade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <WorkInfoLayout
            verMenos={this.verMenos}
            nextWork={this.nextWork}
            key={this.props.work}
          >
            <div className="WorkInfoContent">{trabajo}</div>
          </WorkInfoLayout>
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default WorkInfo;
