import React from "react";

const WorkPageButtons = props => {
  return (
    <div className="workPageButtons">
      <div className="button-works home-btn">
        <button
          className="btn"
          onClick={() => {
            props.selectScreen(1);
          }}
        >
          <i class="fas fa-arrow-left" />
        </button>
      </div>
      <div
        className="button-works contact-btn"
        onClick={() => {
          props.selectScreen(0);
        }}
      >
        <button className="btn">contacto</button>
      </div>
    </div>
  );
};

export default WorkPageButtons;
