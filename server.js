const express = require("express")
const http = require("http")
const socketIo = require('socket.io')

const PORT = 3001


const app = express()
const server = http.createServer(app);
const io = socketIo(server);





app.listen(PORT , () => {
    console.log("server Started");
})