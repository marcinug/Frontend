function Game (name, kind, price, discount) {
    this.name = name;
    this.kind = kind;
    this.price = price;
    this.discount = discount;
}

Game.prototype = {
    getName: function () {
        return this.name;
    },
    getKind: function () {
        return this.kind;
    },
    toString: function() {
        return "This is " + this.name  + ",  kind " + this.kind + " cost " + this.price + "zł.";
    }
}

Game.prototype.getName = function () {
    return this.name;
}

Game.prototype.message = function () {
    console.log("message!")
}

Game.prototype.getNewPrice = function(price , discount) {
    return this.price - (this.price * this.discount)
}

function GameNewProperties (name, kind, isForAdults) {
    Game.call(this, name, kind);
    this.isForAdults = isForAdults;
}

var gameDatabase = {};
gameDatabase.module = (function () {
    // Private 
    var games = [];

    function findGameByName(name){
        return games.find(function (game) {return game.name === name})
    }

    // Public 
    return {
        addGame: function (game) {
            if(games.some(function (gameInDatabase) {return game.name === gameInDatabase.name})){
                console.log("This game was added");
                return;
            }

            games.push(game);
        },

        deletGame: function (name) {
            games = games.filter(function (game) { return game.name !== name})
        },

        displayGame: function (name) {
            console.log(findGameByName(name).toString());
        },

        displayGames: function() {
            games.forEach( function (game) {
                console.log("This is " + game.name  + ", kind " + game.kind + " cost " + game.price + "zł.");
            });
        }
    };
})();

var newGameDatabase = gameDatabase.module;

newGameDatabase.addGame(new Game('Hej to moja ryba', 'Gra planszowa', 50 , 0.1));
newGameDatabase.addGame(new Game('Zlodzieje!', 'Gra karcianka', 20 , 0.05));
newGameDatabase.addGame(new Game('Ego', 'Gra planszowa', 120 , 0));
newGameDatabase.addGame(new Game('Speed Dating', 'Gra karciana', 70 , 0.1));

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
