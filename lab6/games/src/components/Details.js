import React, {Component} from 'react';
import '../App.css';

const games = [
    {   
        id: 1,
        name: "Hej to moja ryba",
        kind: "Gra planszowa",
        price: 50,
        isForAdults: false
    },
    {   
        id: 2,
        name: "Zlodzieje!",
        kind: "Gra karcianka",
        price: 20,
        isForAdults: false
    },
    {   
        id: 3,
        name: "Ego",
        kind: "Gra planszowa",
        price: 99,
        isForAdults: false,
    },
    {   
        id: 4,
        name:"Speed Dating",
        kind: "Gra karcianka",
        price: 70,
        isForAdults: true
    }
]

class Details extends Component {
    state = {
        time: 0,
        seconds: 10,
        value: 0
    }

    render() {
        return (
            <div className="game-details">
                <h2>Details:</h2>
                {games && games.map(game => {

                    return (
                        <ul key={game.id}>
                            <ol><span className="bold">Name:</span> {game.name}</ol>
                            <ol><span className="bold">Kind:</span> {game.kind}</ol>
                            <ol><span className="bold">Price:</span>{game.price}zł</ol>
                        </ul>
                    )
                })}
                
            </div>
        )
    }
}

export default Details;