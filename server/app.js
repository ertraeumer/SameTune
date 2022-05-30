require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.DB_PORT ?? 3001;
const filterRouter = require('./routes/filterRouters');
const bandsRouter = require('./routes/bandsRouters');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Olololo');
});

app.use('/api/filter', filterRouter);
app.use('/api/bands', bandsRouter);

app.listen(PORT, () => {
  console.log('Let`s do it!');
});
