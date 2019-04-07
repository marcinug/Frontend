"use strict";

var _Discount = require("../lib/classes/Discount");

// var game = [
//     {
//         name: "Hej to moja ryba",
//         playersMin: 2,
//         playersMax: 4,
//         kind: "Gra planszowa",
//         isForAdults: false,
//         price: 50
//     },
//     {
//         name: "Zlodzieje!",
//         playersMin: 3,
//         playersMax: 6,
//         kind: "Gra karcianka",
//         isForAdults: false,
//         price: 20
//     },
//     {
//         name: "Ego",
//         playersMin: 2,
//         playersMax: 6,
//         kind: "Gra planszowa",
//         isForAdults: false,
//         price: 120
//     },
//     {
//         name:"Speed Dating",
//         playersMin: 3,
//         playersMax: 7,
//         kind: "Gra karcianka",
//         isForAdults: false,
//         price: 70
//     }
// ]
// function Game (name, kind, price, discount) {
//     this.name = name;
//     this.kind = kind;
//     this.price = price;
//     this.discount = discount;
// }
// Game.prototype = {
//     getName: function () {
//         return this.name;
//     },
//     getKind: function () {
//         return this.kind;
//     }
// }
// Game.prototype.getName = function () {
//     return this.name;
// }
// Game.prototype.message = function () {
//     console.log("message!")
// }
// Game.prototype.getNewPrice = function(price , discount) {
//     return this.price - (this.price * this.discount)
// }
// function GameNewProperties (name, kind, isForAdults) {
//     Game.call(this, name, kind);
//     this.isForAdults = isForAdults;
// }
// GameNewProperties.prototype = Object.create(Game.prototype);
// GameNewProperties.prototype.constructor = GameNewProperties;
// GameNewProperties.prototype.forAdults = function() {
//     return this.isForAdults === false ? "No" : "Yes"
// }
// var checkGame = new GameNewProperties("Dobble", "Gra karciana", false);
// console.log("This game is for adults ? " + checkGame.forAdults());
// var dixitGame = new Game ("Dixit", "Gra planszowa", 90, 0.1);
// console.log("Add new game ", dixitGame.getName(), "kind: ", dixitGame.getKind() );
// console.log("New price:",dixitGame.getNewPrice());
// var moduleGame = (function() {
//     var _privateGame = 'New Game';
//     function _privateGame() {
//         console.log(_privateGame)
//     }
//     return {
//         addGame : function() {
//             _privateGame();
//         }
//     };
// }());
// moduleGame.addGame();
var gameOne = new _Discount.Game("Hej to moja ryba", "Gra planszowa", 90, 0.1);
console.log(gameOne.getFullName());