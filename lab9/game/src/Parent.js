import React, { Component } from "react";
import Dollar from "./Dollar";
import PLN from "./PLN";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dollar: 0,
      pln: 0,
      rate: 3.84
    };
  }

  handlerDolarChange = value => {
    this.setState({ dollar: value, pln: value * this.state.rate });
  };

  handlerPLNChange = value => {
    this.setState({ dollar: value / this.state.rate, pln: value });
  };

  render() {
    return (
      <div>
        <Dollar
          dollars={this.state.dollar}
          onDollarChange={this.handlerDolarChange}
        />
        <PLN plns={this.state.pln} onPLNChange={this.handlerPLNChange} />
      </div>
    );
  }
}

export default Parent;
