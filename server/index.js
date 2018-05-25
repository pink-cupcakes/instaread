const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}./../dist`));

app.get('/books', (req, res) => {
  axios.get('https://itunes.apple.com/search', {params: {term: req.query.keyword, entity: 'ebook'}})
    .then((result) => {
      res.json(result.data.results);
    })
    .catch((error) => {
      res.end();
    })
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Client is live on ${port}`));

module.exports.app = app;