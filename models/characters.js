const mongoose = require('mongoose');
//This is the characters model complete with ability to have videos and pics
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
