const { response } = require("express");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);

  if (req.url == "/") {
    res.statusCode = 200;
    res.end(
      "<h1>This is the vaibhav patil is so cute person and </h1> <p> I am the best</p>"
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is the about</h1> <p>about vaibhav is back</p>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Was page is not found </h1> <p>not found the page</p>");
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
