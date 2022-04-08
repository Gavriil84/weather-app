const express = require('express');
const dotenv = require('dotenv').config;
const port = 5000;
const routes = require('./routes/index');
const connectDB = require('./config/connect');
const app = express();
const path = require('path')
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


connectDB.then(() => {
    console.log("connected to Database!");
    app.listen(process.env.PORT || port, () => console.log(`Running app on PORT:${port}`))
});
app.use('/', express.static(path.join(__dirname, 'dist')))

app.use('/', routes)