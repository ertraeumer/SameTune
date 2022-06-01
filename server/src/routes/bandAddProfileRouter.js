const router = require('express').Router();
const {
  Group, Genre, Location, User,
} = require('../../db/models');
const upload = require('../middlewares/multerMiddleWare');

router.post('/', upload.single('img'), async (req, res) => {
  const {
    name, description, genre, location,
  } = req.body;
  try {
    const genreId = await Genre.findAll({ where: { name: genre } });
    const locationId = await Location.findAll({ where: { name: location } });

    // let newGroup;

    // if (req.file?.originalname) {
    await Group.create({
      name,
      description,
      photo: `images/${req.file?.originalname}`,
      genreId: genreId[0].dataValues.id,
      locationId: locationId[0].dataValues.id,
      ownerId: req.session.user.id,
    });
    // }

    const returnGroup = {
      name,
      description,
      photo: `images/${req.file?.originalname}`,
      genre,
      location,
      owner: User.findByPk(req.session.user.id),
    };

    res.json({ group: returnGroup });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
