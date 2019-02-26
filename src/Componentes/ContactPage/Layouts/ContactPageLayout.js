import React from "react";
import "./ContactPage.css";

const ContactPageLayout = props => {
  return (
    <div className="ContactPage" id="Contacto">
      <div className="PageInfo">
        <p>© 2019 by Diaz J. Mauricio</p>
        <p>Todos los derechos reservados</p>
      </div>
      {props.children}
    </div>
  );
};

export default ContactPageLayout;
