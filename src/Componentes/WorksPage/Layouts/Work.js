import React from "react";

const Work = props => {
  return (
    <div className="work">
      <div
        className="workPrensentation workScreen"
        onWheel={props.handleScroll}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Work;
