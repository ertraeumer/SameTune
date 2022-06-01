const router = require('express').Router();

const {
  User, Group, Instrument, Invite,
} = require('../../db/models');

router.post('/', async (req, res) => {
  const {
    fromUser, toUser, toGroup, instrument,
  } = req.body;
  console.log('req.body--->', req.body);
  try {
    const fromUserId = await User.findAll({ where: { name: fromUser } });
    const toUserId = await User.findAll({ where: { name: toUser } });
    const toGroupId = await Group.findAll({ where: { name: toGroup } });
    const instrumentId = await Instrument.findAll({ where: { name: instrument } });
    console.log(instrumentId[0].dataValues.id);

    const newInvite = await Invite.create({
      fromUserId: fromUserId[0].dataValues.id,
      toUserId: toUserId[0].dataValues.id,
      toGroupId: toGroupId[0].dataValues.id,
      instId: instrumentId[0].dataValues.id,
    });

    console.log(newInvite);

    res.status(200).send('invite has been created');
  } catch (error) {
    res.status(500).send('omnomnom mazafaka!');
  }
});

module.exports = router;
