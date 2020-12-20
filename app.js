// SETUP
var express		= require("express"),
	bodyParser	= require("body-parser"),
	app			= express(),
	mongoose	= require("mongoose");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("assets"));

// ROUTE
app.get("/", (req, res) => {
	res.render("home");
})
app.get("/about", (req, res) => {
	res.render("about");
})
app.get("/game", (req, res) => {
	res.render("game")
})

// POST

// LISTEN
app.listen(3000, () => {
	console.log("Server starting on port 3000");
})
