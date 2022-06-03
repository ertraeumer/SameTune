const router = require('express').Router();
const Sequelize = require('sequelize');
const {
  Group, Location, Genre, User, Instrument, UserGroup,
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
  console.log(req.params);
  try {
    const groupInfo = await Group.findOne({
      where: { id },
      include: [
        { model: Location, attributes: ['name'] },
        { model: Genre, attributes: ['name'] },
        { model: User, attributes: ['name'] },
        { model: Instrument, attributes: ['name'] },
      ],
    });

    console.log('groupInfo---->', groupInfo.Users);

    res.json({
      group: {
        groupInfo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(503).send('Не прошёл твой гет-запрос, фраерок');
  }
});

module.exports = router;
