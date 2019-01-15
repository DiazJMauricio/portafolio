import React from "react";
import "./ContactPage.css";

const ContactPageLayout = props => {
  return (
    <div className="ContactPage" id="Contacto">
      {props.children}
    </div>
  );
};

export default ContactPageLayout;
