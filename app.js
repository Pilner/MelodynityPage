// SETUP
var express		= require("express"),
	bodyParser	= require("body-parser"),
	app			= express(),
	mongoose	= require("mongoose"),
	SongInfo 	= require("./models/songinfo"),
	seedDB		= require("./seeds");


mongoose.connect("mongodb://localhost:27017/melodynitytest1", {useNewUrlParser: true, useUnifiedTopology: true});

seedDB();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("assets"));



// ROUTE
app.get("/", (req, res) => {
	// Get the songlist from DB
	SongInfo.find({}, (err, songList) => {
		if (err) {
			console.log(err)
		} else {
			res.render("home", {songInfo: songList});
		}
	})

})
app.get("/about", (req, res) => {
	res.render("about");
})
app.get("/game", (req, res) => {
	res.render("game")
})
app.get("/all", (req, res) => {
	SongInfo.find({}, (err, songList) => {
		if (err) {
			console.log(err)
		} else {
			res.render("allsongs", {songInfo: songList});
		}
	})
})

app.get("/list", (req, res) => {
	// Get the songlist from DB
	SongInfo.find({}, (err, songList) => {
		if (err) {
			console.log(err)
		} else {
			res.render("songlist", {songInfo: songList});
		}
	})
})


// NEW
app.get("/add", (req, res) => {
	res.render("new")
})


// POST
	//CREATE - add new song to DB
app.post("/new", (req, res) => {
		// get data from form and add to songlist array
	var title = req.body.title;
	var desc = req.body.description;
	var songLink = req.body.songLink;
	var embedLink = srcEmbedLink(req.body.embedLink);
		// get only the src link from the embed url
		function srcEmbedLink(old) {
			var before = old;
			var after = before.match('src="(.*)"></iframe>');

			return after[1];
		}

	var newSong = {title: title, description: desc, songLink: songLink, embedLink: embedLink};
		// Insert a new song and save to DB
	SongInfo.create(newSong, (err, newlyCreated) => {
		if(err) {
			console.log(err);
		} else {
				// redirect back to main page
			res.redirect("/");
			console.log(title + " was added to the database")
			console.log(newSong);
		}
	})
});


// SHOW - shows more info about a song
app.get("/:id", (req, res) => {
	// find the song with the provided id
	SongInfo.findById(req.params.id).exec((err, foundSong) => {
		if (err) {
			console.log(err);
		} else {
			// render show template with that song
			res.render("show", {songInfo: foundSong});
		}
	})
})



// LISTEN
app.listen(3000, () => {
	console.log("Server starting on port 3000");
})
