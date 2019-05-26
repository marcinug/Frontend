import React, { Component } from "react";
import axios from "axios";

class Game extends Component {
  state = {
    game: "",
    games: []
  };

  componentDidMount() {
      this.fetchGames();
  }

  renderGames() {
    console.log("test");
    return this.state.games.map(game => game._name).join(",");
  }

  async fetchGames() {
    const values = await axios.get("http://localhost:4000/api/games/all");
    console.log(values.data);
    this.setState({ games: values.data });
  }

  handelSubmit = async event => {
    event.preventDefault();
    await axios.post("http://localhost:4000/api/games/", {
      game: this.state.game
    });
  };

  render() {
    return (
      <div>
        <div>
          {/* <form onSubmit={this.handelSubmit}>
            <label>Enter game:</label>
            <input value={this.state.game} />
            <button>Submit</button>
          </form> */}
        </div>
        <div>
          <div>{this.state.games && this.renderGames()}</div>
        </div>
      </div>
    );
  }
}

export default Game;