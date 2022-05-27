require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.DB_PORT ?? 3001;
const genreRouter = require('./routes/filterRouters');

app.get('/', (req, res) => {
  res.send('Olololo');
});

app.use('/api/filter', genreRouter);

app.listen(PORT, () => {
  console.log('Let`s do it!');
});
