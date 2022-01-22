var express = require('express');
var app = express();
console.log("Hello World");

app.get("/", function(req, res){
    var absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

var absolutePathAssets = __dirname + "/public";
app.use("/public", express.static(absolutePathAssets));

































 module.exports = app;
