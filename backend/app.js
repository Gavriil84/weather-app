const express = require('express');
const dotenv = require('dotenv').config;
const port = 5000;
const routes = require('./routes/index');
const connectDB = require('./config/connect');

connectDB
    .then(() => {
        console.log("connected to Database!");
        app.listen(port, () => console.log(`Running app on PORT:${port}`))
    });


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/', routes)