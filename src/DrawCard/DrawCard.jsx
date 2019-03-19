import React, { Component } from "react";
import "./DrawCard.css";

class DrawCard extends Component {
  constructor(props) {
    super(props);

    this.newCard = this.newCard.bind(this);
  }

  newCard() {
    this.props.newCard();
  }

  render(props) {
    return (
      <div className="buttonContainer">
        <button className="btn" onClick={this.newCard}>
          Draw Card
        </button>
      </div>
    );
  }
}

export default DrawCard;
