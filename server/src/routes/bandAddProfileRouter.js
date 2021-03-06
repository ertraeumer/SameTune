const router = require('express').Router();
const {
  Group, Genre, Location, Instrument, GroupInstrument, UserGroup,
} = require('../../db/models');
const upload = require('../middlewares/multerMiddleWare');

router.post('/', upload.single('img'), async (req, res) => {
  const {
    name, description, genre, location, instrument,
  } = req.body;
  // console.log(req.session);
  try {
    console.log(req.body);
    const genreId = await Genre.findAll({ where: { name: genre } });
    const locationId = await Location.findAll({ where: { name: location } });
    const instrumentId = await Instrument.findAll({ where: { name: instrument } });

    // if (req.file?.originalname) {
    const newGroup = await Group.create({
      name,
      description,
      // photo: `images/${req.file?.originalname}`,
      genreId: genreId[0].dataValues.id,
      locationId: locationId[0].dataValues.id,
      ownerId: req.session.user.id,
    });
    // }

    if (newGroup) {
      await GroupInstrument.create({
        instrumentId: instrumentId[0].dataValues.id,
        groupId: newGroup.dataValues.id,
      });
      await UserGroup.create({
        groupId: newGroup.dataValues.id,
        userId: req.session.user.id,
      });
    }

    const returnGroup = {
      id: newGroup.id,
      name,
      description,
      photo: `images/${req.file?.originalname}`,
      genre,
      location,
      owner: req.session.user.id,
    };

    res.json({ group: returnGroup });
  } catch (error) {
    console.log(error);
    res.status(500).send('add profile router error');
  }
});

module.exports = router;
