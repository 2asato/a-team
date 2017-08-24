const mongoose = require('mongoose');
//This is the schema for adding episode data into the database
const episodeSchema = mongoose.Schema({
    episodeNumOverall: Number,//allows the overall episode number to be entered and displayed
    episodeNum: Number,//allows the episode number in the current season to be entered and displayed
    season: Number,//allows the season number to be entered and displayed
    title: String,//allows the title of the episode to be entered and displayed
    originalAirDate: Date//allows the original air date of the episode to be displayed and entered
});

const episode = mongoose.model('episode', episodeSchema);

module.exports = episode;
