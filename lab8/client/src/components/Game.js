import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .game {
    font-size: 1.5rem;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .row-inside {
    display: flex;
    flex-direction: column;
    flex: 50%;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 2rem;
  transition: 0.3s ease box-shadow background;
  background: #506cc2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Input = styled.input`
  margin: 5px 30px 10px 0px;
  padding: 0 10px;
  font-size: 1em;
  line-height: 2.5em;
  font-weight: 400;
`;

class Game extends Component {
  state = {
    game: "",
    games: [],
    gameName: "",
    gamePrice: "",
    gameKind: "",
    gameDiscount: ""
  };

  componentDidMount() {
    this.fetchGames();
  }

  renderGames() {
    return this.state.games.map(game => game._name);
  }

  async fetchGames() {
    const values = await axios.get("http://localhost:4000/api/games/all");
    // console.log(values.data);
    this.setState({ games: values.data });
  }

  handelSubmit = async event => {
    // event.preventDefault();
    await axios.post("http://localhost:4000/api/games/", {
      name: this.state.gameName,
      kind: this.state.gameKind,
      price: this.state.gamePrice,
      discount: this.state.gameDiscount === "" ? 0 : this.state.gameDiscount
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { games, gameName, gameKind, gamePrice, gameDiscount } = this.state;
    return (
      <Main>
        <h1>Board Game</h1>
        <div>
          {games.map(game => (
            <p className="game" key={game._name}>
              {game._name} typ: {game._kind} {game._price}zł
            </p>
          ))}
        </div>
        <form onSubmit={this.handelSubmit} className="row">
          <div className="row-inside">
            <label>Enter game name:</label>
            <Input
              id="gameName"
              value={gameName}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <label>Enter game kind:</label>
            <Input
              id="gameKind"
              value={gameKind}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <label>Enter game price:</label>
            <Input
              id="gamePrice"
              type="number"
              value={gamePrice}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <label>Enter game discount</label>
            <Input
              id="gameDiscount"
              type="number"
              value={gameDiscount}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <Button>Submit</Button>
          </div>
        </form>
      </Main>
    );
  }
}

export default Game;
