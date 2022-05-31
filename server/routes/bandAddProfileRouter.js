const router = require('express').Router();
const { Group } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    name, description, photo, genre, location, owner,
  } = req.body;

  const newEntry = await Group.create({
    name,
    description,
    photo,
    genreId: genre,
    locationId: location,
    ownerId: owner,
  });
  console.log(newEntry);
  res.status(200);
});

module.exports = router;
