const router = require('express').Router();
const Sequelize = require('sequelize');
const {
  Group, Location, Genre, User, Instrument,
} = require('../db/models');

const { Op } = Sequelize;

router.post('/', async (req, res) => {
  const { groupGenre, groupLocation, groupInstrument } = req.body;

  const returnGroup = await Group.findAll({
    include: [
      {
        model: Genre,
        attributes: ['name'],
        where: {
          name: (groupGenre || { [Op.like]: '%' }),
        },
      },
      {
        model: Location,
        attributes: ['name'],
        where: {
          name: (groupLocation || { [Op.like]: '%' }),
        },
      },
      {
        model: Instrument,
        attributes: ['name'],
        where: {
          name: (groupInstrument || { [Op.like]: '%' }),
        },
      },
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });
  console.log(returnGroup);

  const result = [];

  returnGroup.map((el) => result.push({
    name: el.name,
    genre: el.Genre.name,
    location: el.Location.name,
    owner: el.Users[0].name,
    photo: el.photo,
    description: el.description,
    requiredInstrument: el.Instruments[0].name,
  }));

  res.json({ group: result });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const groupInfo = await Group.findAll({
    where: { id },
    include: [
      { model: Location, attributes: ['name'] },
      { model: Genre, attributes: ['name'] },
      { model: User, attributes: ['name'] },
      { model: Instrument, attributes: ['name'] },
    ],
  });
  // console.log(typeof groupInfo);

  res.json({
    group: {
      name: groupInfo[0].name,
      genre: groupInfo[0].Genre.name,
      location: groupInfo[0].Location.name,
      owner: groupInfo[0].Users[0].name,
      photo: groupInfo[0].photo,
      description: groupInfo[0].description,
      requiredInstrument: groupInfo[0].Instruments[0].name,
    },
  });
});

module.exports = router;
