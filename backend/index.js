const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/landing", (req, res) => {
  res.render("landing.ejs");
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});