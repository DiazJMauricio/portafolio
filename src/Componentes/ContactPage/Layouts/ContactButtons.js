import React from "react";
import "./ContactButtons.css";

const ContactButtons = props => {
  return (
    <div className="bcontainer">
      <div className="button-home contact-btn">
        <button
          className="btn"
          onClick={() => {
            props.selectScreen(1);
          }}
        >
          <i class="fas fa-arrow-right" />
        </button>
      </div>
      <div className="button-work contact-btn">
        <button
          className="btn"
          onClick={() => {
            props.selectScreen(2);
          }}
        >
          Trabajos
        </button>
      </div>
    </div>
  );
};

export default ContactButtons;
