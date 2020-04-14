var express = require("express");
var app = express();
//const router = express.Router();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet bunny", author: "Mitchell"},
		{title: "Can you believe this pomsky?", author: "Colt"},
	]
	res.render("posts", {posts: posts});
});

app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
}); 

app.listen(3000, process.env.IP, function(){
	console.log("Server has started");
   });