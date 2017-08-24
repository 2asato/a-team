const mongoose = require('mongoose');
const episodeSchema = mongoose.Schema({
    episodeNumOverall: Number,
    episodeNum: Number,
    season: Number,
    title: String,
    originalAirDate: Date,
    characters: []
});

const episode = mongoose.model('episode', episodeSchema);

module.exports = episode;
