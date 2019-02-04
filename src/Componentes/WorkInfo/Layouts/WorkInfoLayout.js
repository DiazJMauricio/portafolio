import React from "react";
import "./WorkInfo.css";

const WorkInfoLayout = props => {
  return (
    <div className="WorkInfo scrollBar">
      {props.children}
      <div className="WorkInfoBtn">
        <button className="btn" onClick={props.verMenos}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="btn" onClick={props.nextWork}>
          <i className="fas fa-arrow-down" />
        </button>
      </div>
    </div>
  );
};

export default WorkInfoLayout;
