const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// import postRouter:
const postRouter = require('./routes/postRouter');
const electroRouter = require('./routes/electroRouter');

// initialize express:
const app = express();

// connection too the DB:
mongoose.connect("mongodb://localhost:27017/demoApplication", (err) => {

if(!err){
    console.log("Connected too the DB!");
}
})

app.use(cors());
app.use(bodyParser.json());

// mount the router:
app.use("/posts", postRouter);
app.use("/electronics", electroRouter);

module.exports = app;