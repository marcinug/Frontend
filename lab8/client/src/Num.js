import React, { Component } from "react";
import axios from "axios";

class Num extends Component {
  state = {
    number: "",
    numbers: []
  };

  componentDidMount() {
      this.fetchNumbers();
  }

  renderNumbers() {
    return this.state.numbers.map(n => n).join(",");
  }

  async fetchNumbers() {
    const values = await axios.get("http://localhost:4000/api/games/all");
    console.log(values);
    this.setState({ number: values });
  }

  handelSubmit = async event => {
    event.preventDefault();
    await axios.post("http://localhost:4000/api/games/", {
      number: this.state.number
    });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handelSubmit}>
            <label>Enter number:</label>
            <input value={this.state.number} />
            <button>Submit</button>
          </form>
        </div>
        <div>
          <div>{this.renderNumbers()}</div>
        </div>
      </div>
    );
  }
}

export default Num;
