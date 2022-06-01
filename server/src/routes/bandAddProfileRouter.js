const router = require('express').Router();
const session = require('express-session');
const {
  Group, Genre, Location, User,
} = require('../../db/models');
const upload = require('../middlewares/multerMiddleWare');

router.post('/', upload.single('img'), async (req, res) => {
  const {
    name, description, genre, location,
  } = req.body;
  console.log({ file: req.file, body: req.body });
  try {
    const genreId = await Genre.findAll({ where: { name: genre } });
    const locationId = await Location.findAll({ where: { name: location } });

    let newGroup;

    console.log('req.session-->', req.session);

    if (req.file?.originalname) {
      newGroup = await Group.create({
        name,
        description,
        photo: `images/${req.file?.originalname}`,
        genreId: genreId[0].dataValues.id,
        locationId: locationId[0].dataValues.id,
        ownerId: req.session.user.id,
      });
    }

    console.log('newGroup ---> ', newGroup);
    const newGroupId = newGroup.dataValues.id;
    console.log('newGroupId---> ', newGroupId);

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
