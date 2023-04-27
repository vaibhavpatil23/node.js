const { response } = require("express");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html')
  res.end('<h1>This is the vaibhav patil is so cute person and </h1> <p> I am the best</p>')
});

server.listen(port,() =>{
  console.log  (`server is listening on port ${port}`)
})