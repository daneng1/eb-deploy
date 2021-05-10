'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.status(200).send('Welcome, this is the Elastic Beanstalk deployed version');
});

app.listen(PORT, () => console.log('Up on', PORT));
