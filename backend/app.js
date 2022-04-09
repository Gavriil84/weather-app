const express = require('express');
const dotenv = require('dotenv').config({ path: "../.env" });;

const port = 5000;
const routes = require('./routes/index');
const connectDB = require('./config/connect');
const app = express();
const cors = require('cors');
const { options } = require('./routes/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static(__dirname + "../frontend/public/index.html"));


connectDB.then(() => {
    console.log("connected to Database!");
    app.listen(process.env.PORT || port, () => console.log(`Running app on PORT:${port}`))
});


app.use('/', routes)