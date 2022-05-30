const Sequelize = require('sequelize');

const { Op } = Sequelize;
const router = require('express').Router();
const {
  User, Location, Genre, Instrument,
} = require('../../db/models');

router.post('/', async (req, res) => {
  const { userLocation, userGenre, userInstrument } = req.body;

  const foundUsers = await User.findAll({

    include: [
      {
        model: Location,
        attributes: ['name'],
        where: {
          name: (userLocation || { [Op.like]: '%' }),
        },
      },
      {
        model: Genre,
        attributes: ['name'],
        where: {
          name: (userGenre || { [Op.like]: '%' }),
        },
      },
      {
        model: Instrument,
        attributes: ['name'],
        where: {
          name: (userInstrument || { [Op.like]: '%' }),
        },
      },
    ],
  });

  const result = [];

  foundUsers.map((el) => result.push({
    name: el.name,
    phone: el.phone,
    profile: el.profile,
    location: el.Location.name,
    genre: el.Genres[0].name,
    instrument: el.Instruments[0].name,
  }));
  res.json({ musicians: result });
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
  res.json({
    musician: {
      name: musicianInfo[0].name,
      phone: musicianInfo[0].phone,
      profile: musicianInfo[0].profile,
      location: musicianInfo[0].Location.name,
      genre: musicianInfo[0].Genres[0].name,
      instrument: musicianInfo[0].Instruments[0].name,
    },
  });
});

module.exports = router;
