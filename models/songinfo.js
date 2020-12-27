var mongoose = require("mongoose");

// SCHEMA SETUP
var songInfo = new mongoose.Schema({
	title: String,
	description: String,
	songLink: String,
	embedLink: String
})

var SongInfo = mongoose.model("Song", songInfo);

module.exports = SongInfo;
