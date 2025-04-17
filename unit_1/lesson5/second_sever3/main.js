"use strict";

const routeResponseMap = {
  "/info": "<h1>Information.</h1>",
  "/contact": "<h1>Communication.</h1>",
  "/about": "<h1>What would you like to learn about us.</h1>",
  "/hello": "<h1>You can email us here: marvel@gmail.com</h1>",
  "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    if (routeResponseMap[req.url]) {
      res.end(routeResponseMap[req.url]);
    } else {
      res.end("<h1>Welcome To Marvelous' Web Page!</h1>");
    }
  });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);
