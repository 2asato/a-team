const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static('public'));

const charactersController = require('./controllers/characters.js');
app.use('/characters', charactersController);

const episodesController = require('./controllers/episodes.js');
app.use('/episodes', episodesController);

const characterseedController = require('./models/characterseed')
app.use('/seedcharacters', characterseedController);

const episodeseedController = require('./models/episodeseed')
app.use('/seedepisodes', episodeseedController);


app.get('/', (req,res)=> {
	res.send('ayyyyyy')
})

var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/ateam';

mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=>{
    console.log('connected to mongo');
})

port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('listening...');
})
