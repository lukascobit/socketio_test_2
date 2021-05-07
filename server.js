const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer();
const io = require('socket.io')(http);


io.on("connection", (socket)=>{
    socket.emit("welcome","Hello");
    console.log("new client connected");
    
})


http.listen(port,()=>{
    console.log(`running on port ${port}`);
})