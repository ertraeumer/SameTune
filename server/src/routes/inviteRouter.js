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

    let inviteType;
    if (fromUserId[0].dataValues.id === toGroupId[0].dataValues.ownerId) {
      inviteType = 'invite';
    } else {
      inviteType = 'request';
    }

    await Invite.create({
      fromUserId: fromUserId[0].dataValues.id,
      toUserId: toUserId[0].dataValues.id,
      toGroupId: toGroupId[0].dataValues.id,
      instId: instrumentId[0].dataValues.id,
      type: inviteType,
    });

    res.status(200).send('invite has been created');
  } catch (error) {
    res.status(500).send('omnomnom mazafaka!');
  }
});

router.get('/showRequestsFromMe', async (req, res) => {
  try {
    const allRequests = await Invite.findAll({
      raw: true,
      where: { fromUserId: req.session.user.id, type: 'request' },
      include: [
        { model: User, attributes: ['name'] },
        { model: Group, attributes: ['name'] },
        { model: Instrument, attributes: ['name'] },
      ],
    });
    res.json({ invites: allRequests });
  } catch (error) {
    console.log(error);
  }
});

router.get('/showInvitesFromMe', async (req, res) => {
  try {
    const allInvites = await Invite.findAll({
      raw: true,
      where: { fromUserId: req.session.user.id, type: 'invite' },
      include: [
        { model: User, attributes: ['name'] },
        { model: Group, attributes: ['name'] },
        { model: Instrument, attributes: ['name'] },
      ],
    });
    res.json({ invites: allInvites });
  } catch (error) {
    console.log(error);
  }
});

router.get('/showRequestsToMyGroup', async (req, res) => {
  try {
    const allRequests = await Invite.findAll({
      raw: true,
      where: { toUserId: req.session.user.id, type: 'request' },
      include: [
        { model: User, attributes: ['name'] },
        { model: Group, attributes: ['name'] },
        { model: Instrument, attributes: ['name'] },
      ],
    });
    res.json({ invites: allRequests });
  } catch (error) {
    console.log(error);
  }
});

router.get('/showBandInvitesToMe', async (req, res) => {
  try {
    const allInvites = await Invite.findAll({
      raw: true,
      where: { toUserId: req.session.user.id, type: 'invite' },
      include: [
        { model: User, attributes: ['name'] },
        { model: Group, attributes: ['name'] },
        { model: Instrument, attributes: ['name'] },
      ],
    });
    res.json({ invites: allInvites });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
