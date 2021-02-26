import React, { Component } from "react";
import "./styles.css";

class Die extends Component {
  render() {
    return (
      <div>
        <i
          className={`Die fas fa-dice-${this.props.face} ${
            this.props.isRolling ? "animate__animated animate__wobble" : ""
          }`}
        ></i>
      </div>
    );
  }
}

export default Die;
