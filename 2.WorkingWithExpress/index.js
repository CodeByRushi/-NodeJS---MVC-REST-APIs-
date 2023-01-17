const http = require('http');

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log("first middleware");
    // res.send("this is /user*");
    next();
});

app.use((req,res,next)=>{
    console.log("another middleware");
    res.send("this is /*");
});

app.listen(3000);

//This is how vanila node.js spins up the server  ----->
// const server = http.createServer(app);
// server.listen(3000);