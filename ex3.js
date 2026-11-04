// Exercise 3: Return the request headers
// Goal: return all the request headers back to the client as a JSON string.
//
// Run: node ex3.js   and open http://localhost:3000

const http = require("http");

// write your code here
const PORT = 3000;

http.createServer((req, res) => {
    res.end(`You used method: ${ JSON.stringify(req.headers)}`);
    return;
}).listen(PORT);