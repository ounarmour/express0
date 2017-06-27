var express = require("express");
var http = require("http");
var app = express();


app.set("views", __dirname + "/views");
app.set("view engine", "pug");


app.get("/", function(request, response) {
  debugger;
  response.render("index", { message: "Ace is the man" });
});


http.createServer(app).listen(1337);
