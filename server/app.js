require('dotenv').config();
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

const PORT = process.env.DB_PORT ?? 3001;

const filterRouter = require('./src/routes/filterRouters');
const bandsRouter = require('./src/routes/bandsRouters');
const authRouter = require('./src/routes/authRouters');
const usersRouter = require('./src/routes/usersRouter');
const musiciansRouter = require('./src/routes/musiciansRouters');
const intrumentsRouter = require('./src/routes/instrumentsRouter');
const bandAddProfileRouter = require('./src/routes/bandAddProfileRouter');
const inviteRouter = require('./src/routes/inviteRouter');

const musicianPhotoRouter = require('./src/routes/musicianPhotoRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.static('public'));

app.use(session({
  name: 'cookah',
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

app.use('/api/filter', filterRouter);
app.use('/api/bands', bandsRouter);
app.use('/api/auth', authRouter);
app.use('/users', usersRouter);
app.use('/instruments', intrumentsRouter);
app.use('/api/musicians', musiciansRouter);
app.use('/api/userProfile/addphoto', musicianPhotoRouter);
app.use('/api/addBand', bandAddProfileRouter);
app.use('/api/inviteToGroup', inviteRouter);

app.listen(PORT, () => {
  console.log('Server started on PORT', PORT);
});
