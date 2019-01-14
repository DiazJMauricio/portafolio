import React from "react";
import "./HomeButtons.css";

const HomeButtons = props => {
  return (
    <div className="container">
      <div className="button-contact home-btn">
        <button>contacto</button>
      </div>
      <div className="button-work home-btn">
        <button>Trabajos</button>
      </div>
    </div>
  );
};

export default HomeButtons;
