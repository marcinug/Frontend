const Game = require('./Game.js');

class GameDatabase {
    constructor() {
        this._games = [];

        this.addGame(new Game('Hej to moja ryba', 'Gra planszowa', 50 , 0.1));
        this.addGame(new Game('Zlodzieje!', 'Gra karcianka', 20 , 0.05));
        this.addGame(new Game('Ego', 'Gra planszowa', 120 , 0));
        this.addGame(new Game('Speed Dating', 'Gra karciana', 70 , 0.1));
    }

    findGameByName(name) {
        return this._games.find(game => game.name === name);
    }

    addGame(game) {
        if(this._games.some(gameInDatabase => game.name === gameInDatabase.name)){
            console.log("This game was added");
            return;
        }

        console.log("Add game");
        return this._games.push(game);
    }

    deletGame(name) {
        this._games = this._games.filter(game => game.name !== name);
    }

    displayGame(name) {
        console.log(this.findGameByName(name).toString());
    }

    displayGames() {
        this._games.forEach(game => console.log("This is " + game.name  + ", kind " + game.kind + " cost " + game.price + "zł."))
    }

    allGames() {
        return this._games;
    }
}

module.exports = GameDatabase;