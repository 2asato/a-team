const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    characterName: String,
    actorName: String,
    catchphrase: String,
    rank: String,
    quirk: String,
    video: String,
    pic: String
});

const character = mongoose.model('character', characterSchema);

module.exports = character;
