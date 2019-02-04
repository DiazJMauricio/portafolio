import React from "react";
import "./HomeHands.css";
import Hand0 from "../../../Img/Hand0.svg";

const hands = [
  "hand1",
  "hand2",
  "hand3",
  "hand4",
  "hand5",
  "hand6",
  "hand7",
  "hand8",
  "hand9",
  "hand7",
  "hand8",
  "hand9"
];
const HomeHands = props => {
  return (
    <div className="container">
      <div className="handsCenter">
        <div className="handsRotation">
          {hands.map((hand, index) => {
            let a = 360 / hands.length;
            let style = { transform: `rotate(${a * index}deg)` };
            return (
              <div className="handAngle" key={index} style={style}>
                <div className="handCircle" />
                <div className="hand">
                  <img src={Hand0} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeHands;
