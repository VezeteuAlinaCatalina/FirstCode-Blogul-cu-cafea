const express = require('express');
const ejs = require('ejs');
const routes = require('./server/routes/recipeRoutes.js');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config();

const app = express();
const port = process.env.PORT|| 3000;

mongoose.connect(`${process.env.MONGODB_URI}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true});

app.use(express.urlencoded( { extended: false } ));

app.use(express.static('public'));


app.set("views", path.join(__dirname, "views"));
app.set('view engine','ejs');

app.use('/',routes);
app.use('/blog',routes);
app.use('/contact',routes);
app.use('/trimis',routes);
app.use('/adauga',routes);

app.listen(port, ()=> console.log(`Conectat la port ${port}`));
