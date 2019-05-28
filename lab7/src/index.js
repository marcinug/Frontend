import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors'

const Game = require('./Game');
const GameDatabase = require('./GameDatabase');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const games = new GameDatabase();

const updateName = function (name) {
    while (name.search('-') > -1) {
        name = name.replace('-', ' ');
    }
    return name;
};

app.get('/api/games/all', (req, res) => {
    res.send(games.allGames());
});

app.get('/api/games/:name', (req, res) => {
    const name = updateName(req.params.name);
    res.send(games.findGameByName(name));
});

app.delete('/api/games/:name', (req, res) => {
    const name = updateName(req.params.name);
    games.deletGame(name);
    res.send(`Deleted ${name}`);
});

app.post('/api/games', (req, res) => {
    const name = req.body.name;
    const kind = req.body.kind;
    const price = req.body.price;
    const discount = req.body.discount;
    games.addGame(new Game(name, kind, price , discount));
    // games.addGame(new Game('Go', 'Gra planszowa', 50 , 0.1));
    res.send(new Game(name, kind, price , discount));
    // res.send(new Game('Go', 'Gra planszowa', 50 , 0.1));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
