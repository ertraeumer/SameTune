const router = require('express').Router();
const {
  User, Location, Genre, Instrument,
} = require('../db/models');

router.post('/', async (req, res) => {
  const { userLocation, userGenre, userInstrument } = req.body;

  const returnUser = await User.findAll({
    raw: true,

    include: [
      {
        model: Location,
        attributes: ['name'],
        where: {
          name: userLocation,
        },
      },
      {
        model: Genre,
        attributes: ['name'],
        where: {
          name: userGenre,
        },
      },
      {
        model: Instrument,
        attributes: ['name'],
        where: {
          name: userInstrument,
        },
      },
    ],
  });
  console.log(returnUser);
  res.json({ musician: returnUser });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const musicianInfo = await User.findAll({
    where: { id },
    include: [
      { model: Location, attributes: ['name'] },
      { model: Genre, attributes: ['name'] },
      { model: Instrument, attributes: ['name'] },
    ],
  });
  res.json({ group: musicianInfo });
});

module.exports = router;
