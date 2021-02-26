import React, { Component } from "react";
import Die from "./Die";
import "./styles.css";
class Roll extends Component {
  constructor() {
    super();
    this.state = {
      die1: "one",
      die2: "one",
      isRolling: false
    };

    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    const sides = ["one", "two", "three", "four", "five", "six"];
    const rand1 = Math.floor(Math.random() * sides.length);
    const rand2 = Math.floor(Math.random() * sides.length);
    this.setState({
      isRolling: true
    });

    setTimeout(
      function () {
        this.setState({
          die1: sides[rand1],
          die2: sides[rand2],
          isRolling: false
        });
      }.bind(this),
      1000
    );
  }

  render() {
    return (
      <div className="Rolldice">
        <div className="Roll">
          <Die face={this.state.die1} isRolling={this.state.isRolling} />
          <Die face={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        <button onClick={this.rollDice} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling...." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default Roll;
