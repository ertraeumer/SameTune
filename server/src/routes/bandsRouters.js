const router = require('express').Router();
const Sequelize = require('sequelize');
const {
  Group, Location, Genre, User, Instrument,
} = require('../../db/models');

const { Op } = Sequelize;

router.post('/', async (req, res) => {
  const { groupGenre, groupLocation, groupInstrument } = req.body;
  try {
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
      raw: true,
    });

    res.json({ group: returnGroup });
  } catch (error) {
    res.status(503).send('Не прокатило!');
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const groupInfo = await Group.findAll({
      where: { id },
      include: [
        { model: Location, attributes: ['name'] },
        { model: Genre, attributes: ['name'] },
        { model: User, attributes: ['name'] },
        { model: Instrument, attributes: ['name'] },
      ],
    });

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
  } catch (error) {
    res.status(503).send('Не прошёл твой гет-запрос, фраерок');
  }
});

module.exports = router;
