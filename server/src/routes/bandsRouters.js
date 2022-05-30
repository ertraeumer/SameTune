const router = require('express').Router();
const {
  Group, Location, Genre, User, UserGroup,
} = require('../../db/models');

router.post('/', async (req, res) => {
  const { groupName } = req.body;

  const returnGroup = await Group.findAll({ where: { name: groupName } });
  res.json({ group: returnGroup });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const groupInfo = await Group.findAll({
    where: { id },
    include: [
      { model: Location, attributes: ['name'] },
      { model: Genre, attributes: ['name'] },
      { model: User },
    ],
  });
  res.json({ group: groupInfo });
});

module.exports = router;
