const router = require('express').Router();
const session = require('express-session');
const {
  Group, Genre, Location, User,
} = require('../../db/models');
const upload = require('../middleWares/multerMiddleWare');

router.post('/', upload.single('img'), async (req, res) => {
  const {
    name, description, genre, location, owner,
  } = req.body;
  console.log({ file: req.file, body: req.body });
  try {
    const genreId = await Genre.findAll({ where: { name: genre } });
    const locationId = await Location.findAll({ where: { name: location } });
    const ownerId = await User.findAll({ where: { name: owner } });

    let newGroup;

    if (req.file?.originalname) {
      newGroup = await Group.create({
        name,
        description,
        photo: `images/${req.file?.originalname}`,
        genreId: genreId[0].dataValues.id,
        locationId: locationId[0].dataValues.id,
        ownerId: ownerId[0].dataValues.id,
      });
    }

    console.log('newGroup ---> ', newGroup);
    const newGroupId = newGroup.dataValues.id;
    console.log('newGroupId---> ', newGroupId);

    // const returnGroup = await Group.findByPk(newGroupId, {
    //   include: [
    //     {
    //       model: Genre,
    //       attributes: ['name'],
    //       where: {
    //         name: genre,
    //       },
    //     },
    //     {
    //       model: Location,
    //       attributes: ['name'],
    //       where: {
    //         name: location,
    //       },
    //     },
    //     {
    //       model: User,
    //       attributes: ['name'],
    //       where: {
    //         name: owner,
    //       },
    //     },
    //   ],
    // });

    const returnGroup = {
      name,
      description,
      photo: `images/${req.file?.originalname}`,
      genre,
      location,
      owner,
    };

    res.json({ group: returnGroup });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

module.exports = router;
