const router = require('express').Router();
const { Genre, Instrument, Location } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const genre = await Genre.findAll({ raw: true });
    const instrument = await Instrument.findAll({ raw: true });
    const location = await Location.findAll({ raw: true });
    const all = [];
    all.push(genre, instrument, location);
    console.log(all);
    res.json({ filter: all });
  } catch (error) {
    res.status(501).send('Everything is very bad');
  }
});

module.exports = router;
