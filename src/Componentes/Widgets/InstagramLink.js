import React from "react";

const InstagramLink = props => {
  return (
    <a href={props.url}>
      <i className="fab fa-instagram" />
    </a>
  );
};

export default InstagramLink;
