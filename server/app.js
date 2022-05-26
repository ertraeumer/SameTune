require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.DB_PORT ?? 3001;

app.get('/', (req, res) => {
  res.send('Olololo');
});

app.listen(PORT, () => {
  console.log('Let`s do it!');
});
