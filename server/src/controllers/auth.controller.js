const bcrypt = require('bcrypt');

const { User, Location } = require('../../db/models');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 6);
  if (email && password) {
    try {
      const newUser = await User.create({ email, password: hash });

      req.session.user = {
        id: newUser.id,
        email: newUser.email,
      };

      return res.json({ id: newUser.id, email: newUser.email });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

const signIn = async (req, res) => {
  const { password, email } = req.body;

  if (password && email) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      const compareResult = await bcrypt.compare(password, currentUser.password);
      if (currentUser && compareResult) {
        req.session.user = {
          id: currentUser.id,
          email: currentUser.email,
        };
        try {
          const location = await Location.findByPk(currentUser.locationId);
          return res.json({ ...currentUser.dataValues, location: location.name });
        } catch (error) {
          return res.json({ ...currentUser.dataValues, location: null });
        }
      }
      return res.sendStatus(401);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(400);
};

const signOut = async (req, res) => {
  req.session.destroy((error) => {
    if (error) return res.sendStatus(500);

    res.clearCookie(req.app.get('cookieName'));

    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, email: user.email });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signUp,
  signIn,
  signOut,
  checkAuth,
};
