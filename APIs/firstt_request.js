var request = require('request');
request('http://www.reddit.com', function(error, response, body) {
    if(!error && response.statusCode == 200) {
        console.log("");
        console.log(body);
        } 
    }
});