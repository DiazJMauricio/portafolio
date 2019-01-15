import React from "react";
import "./HomeButtons.css";

const HomeButtons = props => {
  return (
    <div className="container">
      <div className="button-contact home-btn ">
        <button
          onClick={() => {
            props.selectScreen(0);
          }}
          className="btn"
        >
          Contacto
        </button>
      </div>
      <div className="button-work home-btn ">
        <button
          onClick={() => {
            props.selectScreen(2);
          }}
          className="btn"
        >
          Trabajos
        </button>
      </div>
    </div>
  );
};

export default HomeButtons;
