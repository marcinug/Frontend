"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game(name, kind, price, discount) {
    _classCallCheck(this, Game);

    this._name = name;
    this._kind = kind;
    this._price = price;
    this._discount = discount;
  }

  _createClass(Game, [{
    key: "toString",
    value: function toString() {
      return "This is ".concat(this.name, ", kind ").concat(this.kind, " cost ").concat(this.price, "z\u0142.");
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "kind",
    get: function get() {
      return this._kind;
    }
  }, {
    key: "price",
    get: function get() {
      return this._price;
    }
  }, {
    key: "discount",
    get: function get() {
      return this._discount;
    }
  }]);

  return Game;
}(); // Game.prototype.getNewPrice = function(price , discount) {
//     return this.price - (this.price * this.discount)
// }
// function GameNewProperties (name, kind, isForAdults) {
//     Game.call(this, name, kind);
//     this.isForAdults = isForAdults;
// }


var gameDatabase =
/*#__PURE__*/
function () {
  function gameDatabase() {
    _classCallCheck(this, gameDatabase);

    this._games = [];
  }

  _createClass(gameDatabase, [{
    key: "findGameByName",
    value: function findGameByName(name) {
      return this._games.find(function (game) {
        return game.name === name;
      });
    }
  }, {
    key: "addGame",
    value: function addGame(game) {
      if (this._games.some(function (gameInDatabase) {
        return game.name === gameInDatabase.name;
      })) {
        console.log("This game was added");
        return;
      }

      this._games.push(game);
    }
  }, {
    key: "deletGame",
    value: function deletGame(name) {
      this._games = this._games.filter(function (game) {
        return game.name !== name;
      });
    }
  }, {
    key: "displayGame",
    value: function displayGame(name) {
      console.log(this.findGameByName(name).toString());
    }
  }, {
    key: "displayGames",
    value: function displayGames() {
      this._games.forEach(function (game) {
        return console.log("This is " + game.name + ", kind " + game.kind + " cost " + game.price + "zł.");
      });
    }
  }]);

  return gameDatabase;
}();

var newGameDatabase = new gameDatabase();
newGameDatabase.addGame(new Game('Hej to moja ryba', 'Gra planszowa', 50, 0.1));
newGameDatabase.addGame(new Game('Zlodzieje!', 'Gra karcianka', 20, 0.05));
newGameDatabase.addGame(new Game('Ego', 'Gra planszowa', 120, 0));
newGameDatabase.addGame(new Game('Speed Dating', 'Gra karciana', 70, 0.1));
console.log("#######");
newGameDatabase.displayGame('Hej to moja ryba');
console.log("#######");
newGameDatabase.displayGames();
newGameDatabase.deletGame('Speed Dating');
console.log("#######");
newGameDatabase.displayGames();
newGameDatabase.deletGame('Ego');
console.log("#######");
newGameDatabase.displayGames();