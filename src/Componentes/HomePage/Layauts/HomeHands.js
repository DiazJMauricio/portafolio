import React from "react";
import "./HomeHands.css";
const hands = ["hand1", "hand2", "hand3", "hand4", "hand5", "hand6", "hand7"];
const HomeHands = props => {
  return (
    <div className="container">
      <div className="handsCenter">
        <div className="handsRotation">
          {hands.map((hand, index) => {
            let style = { transform: `rotate(${50 * index}deg)` };
            return (
              <div className="handAngle" style={style}>
                <div className="hand">{hand}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeHands;
