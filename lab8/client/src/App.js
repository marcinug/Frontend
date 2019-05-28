import React from "react";
import "./App.css";
import Game from "./components/Game";
import GameHook from "./components/GameHook";
import Header from "./components/Header";
import Page404 from "./components/Page404";
import About from "./components/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/gamehook" component={GameHook} />
        <Route exact path="/about" component={About}/>
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
