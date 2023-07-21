import http from "http";
import fs from "fs"
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;
connectDB();

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    req.statusCode = 200;
    res.end("<h1>Hello World</h1> <h2>This is my first server!</h2>");
  } else if (req.url == "/about") {
    req.statusCode = 200;
    res.end("<h1>About</h1> <h2>This is my About Page!</h2>");
  } else if (req.url == "/cart") {
    req.statusCode = 200;
    res.end("<h1>Cart</h1> <h2>This is my Cart!</h2>");
  } else if (req.url == "/navbar") {
    req.statusCode = 200;
    const file = fs.readFileSync('index.html')
    res.end(file.toString());
  } else {
    req.statusCode = 404;
    res.end("<h1>Not Found</h1> <h2>This Page is not found!</h2>");
  }
});

server.listen(port, () => {
  console.log(`This server is running on localhost:${port}`);
});
