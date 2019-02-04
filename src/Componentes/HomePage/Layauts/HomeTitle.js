import React from "react";
import "./HomeTitle.css";

const HomeTitle = props => {
  return (
    <div className="container">
      <div className="titleCenter">
        <div className="titleFigure">
          <h1 className="title">Diaz J. Mauricio</h1>
          <div className="HomeSubtitles">
            <h4 className="subtitle">Diseño Web Front-end</h4>
            <h4 className="subtitle">Ilustración</h4>
            <h4 className="subtitle">UI / UX</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
