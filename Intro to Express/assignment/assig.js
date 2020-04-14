var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi There! Welcome to my assignment");
});

app.get("/:secPara/:thirPara", function(req, res){

	var parameter = req.params.secPara;

	if(parameter == "speak"){
		var animal = req.params.thirPara;
		if(animal == "pig"){
			var sound = "'Oink'";
		}

		else if(animal == "cow"){
			var sound = "'Moo'";
		}

		else if(animal == "dog"){
			var sound = "'Woof! Woof!'";
		}

		res.send("The "+ animal + " says " + sound);	
	}
});

app.get("/:secPara/:thirPara/:times", function(req, res){

	var parameter = req.params.secPara;

	var prvalue = req.params.thirPara;

	var loopno = Number(req.params.times);

	var result = "";

	if(parameter == "repeat"){
		var pr = req.params.thirPara;
		for(var i=0; i<loopno; i++){
			result += pr + " ";
		}

		res.send(result);
	}	
	
});

app.listen(3000, process.env.IP, function(){
	console.log("Server has started");
});

app.get("*", function(req, res){
	res.send("Sorry page not found...What are you doing with your life?");
});
