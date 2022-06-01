const router = require('express').Router();
const upload = require('../middlewares/multerMiddleWare');
const { User } = require('../../db/models');

router.post('/', upload.single('img'), async (req, res, next) => {
  console.log('req.file -->', req.file?.originalname);
  console.log('req.body -->', req.body);

  const { id } = req.body;

  if (req.file.originalname) {
    await User.update({ photo: `images/${req.file.originalname}` }, { where: { id } });
  }

  const returnPhoto = await User.findByPk(id);
  res.json({ photo: returnPhoto });
});

module.exports = router;
