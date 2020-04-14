var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi There");
});

app.get("/bye", function(req, res){
	res.send("GOODBYE!");
});

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit + " SUBREDDIT");
}); 

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE COMMENTS PAGE ");
});  

app.get("/dog", function(req, res){
	res.send("Meaow!");
});  

app.listen(3000, process.env.IP, function(){
	console.log("Server has started");
});

app.get("*", function(req, res){
	res.send("YOU'RE A STAR");
});
