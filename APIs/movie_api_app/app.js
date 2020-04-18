var express = require("express");
var app = express();
var request = require('request');

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    request("http://odmbapi.com/?s=california&apikey=thewdb", function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    })
});

app.listen(3000, process.env.IP, function(){
	console.log("Movie App has started");
});