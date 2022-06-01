const router = require('express').Router();
const session = require('express-session');
const {
  Group, Genre, Location, Instrument, GroupInstrument,
} = require('../../db/models');
const upload = require('../middlewares/multerMiddleWare');

router.post('/', upload.single('img'), async (req, res) => {
  const {
    name, description, genre, location, instrument,
  } = req.body;
  // console.log(req.session);
  try {
    const genreId = await Genre.findAll({ where: { name: genre } });
    const locationId = await Location.findAll({ where: { name: location } });
    const instrumentId = await Instrument.findAll({ where: { name: instrument } });

    console.log('req.session-->', req.session);

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

    let newGroupInst;
    if (newGroup) {
      newGroupInst = await GroupInstrument.create({
        instrumentId: instrumentId[0].dataValues.id,
        groupId: newGroup.dataValues.id,

      });
    }

    console.log('newGroupInst ---> ', newGroupInst);
    const nnewGroupInstId = newGroupInst.dataValues.id;
    console.log('newGroupInst---> ', newGroupInst);

    const returnGroup = {
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
