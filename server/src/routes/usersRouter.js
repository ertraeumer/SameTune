const router = require('express').Router();
const usersController = require('../controllers/users.controller');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');

router.route('/:id')
  .patch(checkAuth, checkAuthor, usersController.editUser)
  .get(checkAuth, usersController.getUser);

module.exports = router;
