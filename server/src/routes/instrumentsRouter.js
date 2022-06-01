const router = require('express').Router();
const { UserInstrument, Instrument } = require('../../db/models');

router.post('/add', async (req, res) => {
  const { userId, instrument } = req.body;
  try {
    const currInstrument = await Instrument.findOne({ where: { name: instrument } });
    const newUserInstrument = await UserInstrument.create({
      userId,
      instrumentId: currInstrument.dataValues.id,
    });
    res.json({ newUserInstrument });
  } catch (error) {
    console.log('Creation of new instrument-user pair unsuccessfull', error);
  }
});

module.exports = router;
