var faker = require("faker");

console.log("================================");
console.log("WELCOME TO MY SHOP!");
console.log("================================");

for(var i=0; i<10; i++)
{
	var product = faker.commerce.productName();
	var pr = faker.commerce.price();
	console.log(product + " = " + pr);
}

//commerce:
//productName
//price