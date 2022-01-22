require('dotenv').config()
var express = require('express');
var app = express();
console.log("Hello World");

app.get("/", function(req, res){
    var absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get("/json", function(req, res){
    res.json({'message': "Hello json"});
})

var absolutePathAssets = __dirname + "/public";
app.use("/public", express.static(absolutePathAssets));

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " " + req.ip);
    next();
})

































 module.exports = app;
