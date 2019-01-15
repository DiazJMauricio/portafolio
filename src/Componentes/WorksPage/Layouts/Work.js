import React from "react";

const Work = props => {
  return (
    <div className="work">
      <div className="workPrensentation workScreen">
        {props.children[0]}
        <button onClick={props.handleClick}>ver mas</button>
      </div>
      <div className="workInfo workScreen">{props.children[1]}</div>
    </div>
  );
};

export default Work;
