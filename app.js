const express = require('express');
const indexRouter = require('./routes/indexRouter');
const bodyParser = require("body-parser");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());


app.use('/', indexRouter);

module.exports = app;