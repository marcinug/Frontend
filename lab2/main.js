var game = [
    {
        name: "Hej to moja ryba",
        playersMin: 2,
        playersMax: 4,
        kind: "Gra planszowa",
        isForAdults: false
    },
    {
        name: "Zlodzieje!",
        playersMin: 3,
        playersMax: 6,
        kind: "Gra karcianka",
        isForAdults: false
    },
    {
        name: "Ego",
        playersMin: 2,
        playersMax: 6,
        kind: "Gra planszowa",
        isForAdults: false,
    },
    {
        name:"Speed Dating",
        playersMin: 3,
        playersMax: 7,
        kind: "Gra karcianka",
        isForAdults: false
    }
]

function display(game, i) {
   return(console.log(game[i])) 
}

// display(game, 0);
// display(game, 2);


function gameType(type) {
    game.filter(function(game){
        if(game.kind === type){
            console.log(game.name)
        }
    });
} 

// gameType("Gra karcianka");
// gameType("Gra planszowa");

function gameName(name) {
    game.filter(function(game){
        if(game.name === name){
            console.log(game)
        }
    });
} 

// gameName("Hej to moja ryba");

function gamePlayerMin(val) {
    game.filter(function(game){
        if(game.playersMin <= val && game.playersMax >= val){
            console.log(game.name)
        }
    });
} 

// gamePlayerMin(7);

game.push(
    {
        name: "5 sekkund",
        playersMin: 3,
        playersMax: 6,
        kind: "Gra planszowa",
        isForAdults: false
    }
)

// console.log(game);

function gameRemove(val) {
    game.splice(val, 1)
}

gameRemove(0);
// console.log(game);

 
