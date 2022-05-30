const router = require('express').Router();
const {
  Group, Location, Genre, User, Instrument,
} = require('../db/models');

router.post('/', async (req, res) => {
  const { groupGenre, groupLocation, groupInstrument } = req.body;

  const returnGroup = await Group.findAll({
    include: [
      {
        model: Genre,
        attributes: ['name'],
        where: {
          name: groupGenre,
        },
      },
      {
        model: Location,
        attributes: ['name'],
        where: {
          name: groupLocation,
        },
      },
      {
        model: Instrument,
        attributes: ['name'],
        where: {
          name: groupInstrument,
        },
      },
    ],
  });
  console.log(returnGroup);
  res.json({ group: returnGroup });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const groupInfo = await Group.findAll({
    where: { id },
    include: [
      { model: Location, attributes: ['name'] },
      { model: Genre, attributes: ['name'] },
      { model: User, attributes: ['name'] },
    ],
  });
  res.json({ group: groupInfo });
});

module.exports = router;
