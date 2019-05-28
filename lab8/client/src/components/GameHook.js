import React, { useState, useEffect } from "react";
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

const initialState = {
  gameName: "",
  gamePrice: "",
  gameKind: "",
  gameDiscount: ""
};

const Game = () => {
  const [gameName, setGameName] = useState(initialState.gameName);
  const [gameDiscount, setGameDiscount] = useState(initialState.gameDiscount);
  const [gamePrice, setGamePrice] = useState(initialState.gamePrice);
  const [gameKind, setGameKind] = useState(initialState.gameKind);

  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    // console.log("Fetch Games");
    const res = await fetch("http://localhost:4000/api/games/all");
    const data = await res.json();
    setGames(data);
  };
  useEffect(() => {
    fetchGames();
  }, []); // For control that's something change [name]

  const handelSubmit = async () => {
    // console.log("Post Games");
    await axios.post("http://localhost:4000/api/games/", {
      name: gameName,
      kind: gameKind,
      price: gamePrice,
      discount: gameDiscount === "" ? 0 : gameDiscount
    });
  };

  return (
    <Main>
      <h1>Board Game with hooks</h1>
      <div>
        {games.map(game => (
          <p className="game" key={game._name}>
            {game._name} typ: {game._kind} {game._price}zł
          </p>
        ))}
      </div>
      <form className="row">
        <div className="row-inside">
          <label>Enter game name:</label>
          <Input onChange={e => setGameName(e.target.value)} value={gameName} />
        </div>
        <div className="row-inside">
          <label>Enter game kind:</label>
          <Input onChange={e => setGameKind(e.target.value)} value={gameKind} />
        </div>
        <div className="row-inside">
          <label>Enter game price:</label>
          <Input
            type="number"
            onChange={e => setGamePrice(e.target.value)}
            value={gamePrice}
          />
        </div>
        <div className="row-inside">
          <label>Enter game discount</label>
          <Input
            type="number"
            onChange={e => setGameDiscount(e.target.value)}
            value={gameDiscount}
          />
        </div>
        <div className="row-inside">
          <Button onClick={() => handelSubmit()}>Submit</Button>
        </div>
      </form>
    </Main>
  );
};

export default Game;
