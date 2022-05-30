const router = require('express').Router();
const { Genre, Instrument, Location } = require('../../db/models');

router.get('/', async (req, res) => {
  const genre = await Genre.findAll({ raw: true });
  const instrument = await Instrument.findAll({ raw: true });
  const location = await Location.findAll({ raw: true });
  const all = [];
  all.push(genre, instrument, location);
  res.json({ filter: all });
});

module.exports = router;
