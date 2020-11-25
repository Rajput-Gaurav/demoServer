const http = require('http');
const PORT = 3000;

// import app:
const app = require('./app');

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("Server Started on PORT::" +PORT);
})