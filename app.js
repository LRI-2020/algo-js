﻿const express = require("express");
const app = express();

app.use(express.static('./'));

app.get("/",function (req, res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000,function(){
    console.log("server on port 3000");
});