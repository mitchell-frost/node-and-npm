var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add a new cat

/* var George = new Cat({
    name: "Mrs. Norris",
    age: 7,
    temperament: "Evil"
});

George.save(function(err, cat){
    if(err){
        console.log("SOMETHING WENT WRONG!");
    } else {
        console.log("WE JUST SAVED A CAT TO THE DB");
        console.log(cat);
    }
}); */

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NO! ERROR");
        console.log(err);
    } else {
        console.log("ALL THE CATS:");
        console.log(cats);
    }
})

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

//retrieve all cats from the database