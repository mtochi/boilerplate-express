require('dotenv').config()
var express = require('express');
var app = express();
console.log("Hello World");

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get("/", function(req, res){
    var absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

app.get("/json", function(req, res){
    res.json({'message': "Hello json"});
})

app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.json({"time":req.time});
})

var absolutePathAssets = __dirname + "/public";
app.use("/public", express.static(absolutePathAssets));


































 module.exports = app;
