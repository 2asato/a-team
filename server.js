const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const charactersController = require('./controllers/characters.js');
app.use('/characters', charactersController);

const episodesController = require('./controllers/episodes.js');
app.use('/episodes', episodesController);

app.listen(3000, function(){
    console.log('listening...');
})
