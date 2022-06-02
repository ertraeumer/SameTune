const Sequelize = require('sequelize');

const { Op } = Sequelize;
const router = require('express').Router();
const {
  User, Location, Genre, Instrument, Group,
} = require('../../db/models');

router.post('/', async (req, res) => {
  const { userLocation, userGenre, userInstrument } = req.body;
  try {
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
            [Op.and]: [
              {
                name: {
                  [Op.not]: null,
                },
              },
              {
                name: (userGenre || { [Op.like]: '%' }),
              },
            ],
          },
        },
        {
          model: Instrument,
          attributes: ['name'],
          where: {
            [Op.and]: [
              {
                name: {
                  [Op.not]: null,
                },
              },
              {
                name: (userInstrument || { [Op.like]: '%' }),
              },
            ],
          },
        },
      ],
      where: {
        locationId: {
          [Op.not]: null,
        },
      },
      raw: true,
    });
    const uniqueUserIds = [...new Set(foundUsers.map((el) => el.id))];
    const result = uniqueUserIds.map((elem) => {
      const oneUser = foundUsers.find((el) => el.id === elem);
      const instruments = [];
      foundUsers.forEach((el) => {
        if (el.id === oneUser.id) instruments.push(el['Instruments.name']);
      });
      return {
        id: oneUser.id,
        name: oneUser.name,
        location: oneUser['Location.name'],
        genre: oneUser['Genres.name'],
        instruments: [...new Set(instruments)],
      };
    });

    res.json({ result });
  } catch (error) {
    res.status(502).send('Everything is very bad');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // const musicianInfo = await User.findAll({
    //   where: { id },
    //   include: [
    //     { model: Location, attributes: ['name'] },
    //     { model: Genre, attributes: ['name'] },
    //     { model: Instrument, attributes: ['name'] },
    //   ],
    //   raw: true,
    // });
    // console.log(...musicianInfo);
    // return res.json({
    //   name: musicianInfo[0].name,
    //   phone: musicianInfo[0].phone,
    //   profile: musicianInfo[0].profile,
    //   photo: musicianInfo[0].photo,
    //   location: musicianInfo[0]['Location.name'],
    //   genre: musicianInfo[0].Genres[0].name,
    //   instrument: musicianInfo[0].Instruments[0].name,
    // });
    const currentUser = await User.findOne({ where: { id } });

    const currentUserInfo = await User.findAll({

      where: {
        id,
      },

      include: [
        {
          model: Location,
          attributes: ['name'],
        },
        {
          model: Genre,
          attributes: ['name'],
        },
        {
          model: Instrument,
          attributes: ['name'],
        },
        {
          model: Group,
          attributes: ['name'],
        },
      ],
      raw: true,
    });

    const genres = [...new Set(currentUserInfo.map((el) => el['Genres.name']))];
    const instruments = [...new Set(currentUserInfo.map((el) => el['Instruments.name']))];
    const groups = [...new Set(currentUserInfo.map((el) => el['Groups.name']))];
    const location = currentUserInfo[0]['Location.name'];

    const userToReturn = {
      ...currentUser.dataValues,
      location,
      genres,
      instruments,
      groups,
    };

    delete userToReturn.password;

    console.log({ ...userToReturn });

    return res.json({ ...userToReturn });
  } catch (error) {
    return res.status(503).send('Get-запрос не удался');
  }
});

module.exports = router;
