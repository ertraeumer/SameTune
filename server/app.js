require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.DB_PORT ?? 3001;
const filterRouter = require('./routes/filterRouters');
const bandsRouter = require('./routes/bandsRouters');
const musiciansRouter = require('./routes/musiciansRouters');
const musicianPhotoRouter = require('./routes/musicianPhotoRouter');
const bandAddProfileRouter = require('./routes/bandAddProfileRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Olololo');
});

app.use('/api/filter', filterRouter);
app.use('/api/bands', bandsRouter);
app.use('/api/musicians', musiciansRouter);
app.use('/api/userProfile/addphoto', musicianPhotoRouter);
app.use('/api/addBand', bandAddProfileRouter);

app.listen(PORT, () => {
  console.log('Let`s do it!');
});
