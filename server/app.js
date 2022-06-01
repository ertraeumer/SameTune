require('dotenv').config();
const cors = require('cors');
const express = require('express');
const session = require('express-session')

const app = express();

const PORT = process.env.DB_PORT ?? 3001;
const filterRouter = require('./src/routes/filterRouters');
const bandsRouter = require('./src/routes/bandsRouters');
const musiciansRouter = require('./src/routes/musiciansRouters');
const musicianPhotoRouter = require('./src/routes/musicianPhotoRouter');
const bandAddProfileRouter = require('./src/routes/bandAddProfileRouter');

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
