class Game {
    constructor(name, kind, price, discount) {
        this._name = name;
        this._kind = kind;
        this._price = price;
        this._discount = discount;
    }

    get name() {
        return this._name;
    }

    get kind() {
        return this._kind;
    }

    get price() {
        return this._price;
    }

    get discount() {
        return this._discount
    }

    toString() {
        return `This is ${this.name}, kind ${this.kind} cost ${this.price}zł.`;
    }

}

// Game.prototype.getNewPrice = function(price , discount) {
//     return this.price - (this.price * this.discount)
// }

// function GameNewProperties (name, kind, isForAdults) {
//     Game.call(this, name, kind);
//     this.isForAdults = isForAdults;
// }

class gameDatabase {
    constructor() {
        this._games = [];
    }

    findGameByName(name) {
        return this._games.find(game => game.name === name);
    }

    addGame(game) {
        if(this._games.some(gameInDatabase => game.name === gameInDatabase.name)){
            console.log("This game was added");
            return;
        }

        this._games.push(game);
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
}

const newGameDatabase =  new gameDatabase();

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
