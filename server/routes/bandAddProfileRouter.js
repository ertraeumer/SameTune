const router = require('express').Router();
const {
  Group, Genre, Location, User,
} = require('../db/models');

router.post('/', async (req, res) => {
  const {
    name, description, photo, genre, location, owner,
  } = req.body;

  try {
    const genreId = await Genre.findAll({ where: { name: genre } });
    const locationId = await Location.findAll({ where: { name: location } });
    const ownerId = await User.findAll({ where: { name: owner } });

    console.log('ownerId --->', ownerId[0].dataValues.id);

    await Group.create({
      name,
      description,
      photo,
      genreId: genreId[0].dataValues.id,
      locationId: locationId[0].dataValues.id,
      ownerId: ownerId[0].dataValues.id,
    });
    res.status(200).send('success');
  } catch (error) {
    res.status(500).end();
    console.log(error);
  }
});

module.exports = router;
