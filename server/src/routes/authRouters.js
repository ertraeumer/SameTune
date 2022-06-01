const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const checkAuth = require(',,/middlewares/checkAuth');

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.get('/signout', authController.signOut);
router.get('/check', checkAuth, authController.checkAuth);

module.exports = router;
