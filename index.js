const express = require('express');
const server = express();

server.use(express.json());

const userRoute = require('./routes/user');
server.use('/users', userRoute);



server.listen(3000,console.log("Server is Running At Port 3000"));