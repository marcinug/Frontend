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

module.exports = Game;