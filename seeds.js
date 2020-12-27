var mongoose = require("mongoose");
var SongInfo = require("./models/songinfo.js");

var data = [
	{
		title: "Angel Touch [Melodynity bootleg]",
		description: "Original by Cindy - Angel Touch",
		songLink: "https://soundcloud.com/melodynity/angel-touch-melodynity-bootleg",
		embedLink: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/720306028&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
	},
	{
		title: "Gundam - Invoke [Different Genres]",
		description: "Original by T.M.Revolution - Invoke",
		songLink: "https://soundcloud.com/melodynity/gundam-invoke-different-genres",
		embedLink: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/782341699&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
	},
	{
		title: "Approximate",
		description: "Melodynity - Approximate",
		songLink: "https://soundcloud.com/melodynity/approximate",
		embedLink: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/782351914&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
	},
	{
		title: "Candy [Melodynity bootleg]",
		description: "Original by 具島直子 (Naoko Gushima) - Candy",
		songLink: "https://soundcloud.com/melodynity/candy-melodynity-bootleg",
		embedLink: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/860626561&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
	}
	
]


function seedDB() {
	//remove all songs
	SongInfo.deleteMany({}, (err) => {
		if (err) {
			console.log(err);
		}
		console.log("removed all songs");
		//re-add songs
		data.forEach((seed) => {
			SongInfo.create(seed, (err, song) => {
				if (err) {
					console.log(err);
				} else {
					console.log("added a song");
				}
			})
		})
	});
}

module.exports = seedDB;