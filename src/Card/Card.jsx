import React from "react";
import "./Card.css";

//presentational component - showing us question and answer on respective sides
const Card = props => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="eng">{props.eng}</div>
      </div>
      <div className="back">
        <div className="spanish">{props.esp}</div>
      </div>
    </div>
  </div>
);

export default Card;
