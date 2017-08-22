const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

const charactersController = require('./controllers/characters.js');
app.use('/characters', charactersController);

const episodesController = require('./controllers/episodes.js');
app.use('/episodes', episodesController);

const characterseedController = require('./models/characterseed')
app.use('/seedcharacters', characterseedController);

const episodeseedController = require('./models/episodeseed')
app.use('/seedepisodes', episodeseedController);

mongoose.connect('mongodb://localhost:27017/ateam')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

app.listen(3000, function(){
    console.log('listening...');
})
