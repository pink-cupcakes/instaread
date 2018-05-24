const express = require('express');

const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//initialize express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}./../dist`));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Client is live on ${port}`));

module.exports.app = app;