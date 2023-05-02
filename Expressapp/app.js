const express = require("express");
const app = express();
const port = 80;
app.use("/static", express.static("static"));

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.static(200).render('demo',{title:'Hey brothher',massege: "Hello there"});
  });

app.get("/", (req, res) => {
  res.static(200).send("This is homepage of my first express app");
});
app.get("/about", (req, res) => {
  res.static(200).send("This is about page of my first express app");
});
app.get("/this", (req, res) => {
  res.static(200).send("This is contact page of my first express app");
});
app.get("/about", (req, res) => {
  res.static(200).send("This is serverpage of my first express app");
});
