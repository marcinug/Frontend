export class Game {
    constructor (name, kind, price, discount) {
        this._name = name;
        this._kind = kind;
        this._price = price;
        this._discount = discount;
    }

    set name(value) {
        this._name = value
    }
    set kind(value) {
        this._kind = value
    }
    set price(value) {
        this._price = value
    }
    set discount(value) {
        this._discount = value
    }

    get name() {
        return this._name
    }
    get kind() {
        return this._kind
    }
    get price() {
        return this._price
    }
    get discount() {
        return this._discount
    }

    getFullName() {
        return `${kind} : ${name} price : ${price}`
    }


}