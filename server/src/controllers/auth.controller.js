const bcrypt = require('bcrypt');

const {
  User, Location, Genre, Instrument, Group,
} = require('../../db/models');

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
          const currentUserInfo = await User.findAll({

            where: {
              id: currentUser.id,
            },

            include: [
              {
                model: Location,
                attributes: ['name'],
              },
              {
                model: Genre,
                attributes: ['name'],
              },
              {
                model: Instrument,
                attributes: ['name'],
              },
              {
                model: Group,
                attributes: ['name'],
              },
            ],
            raw: true,
          });

          const genres = [...new Set(currentUserInfo.map((el) => el['Genres.name']))];
          const instruments = [...new Set(currentUserInfo.map((el) => el['Instruments.name']))];
          const groups = [...new Set(currentUserInfo.map((el) => el['Groups.name']))];
          const location = currentUserInfo[0]['Location.name'];

          const userToReturn = {
            ...currentUser.dataValues,
            location,
            genres,
            instruments,
            groups,
          };

          delete userToReturn.password;

          return res.json({ ...userToReturn });
        } catch (error) {
          const userToReturn = {
            ...currentUser.dataValues,
            location: null,
            intruments: null,
            genres: null,
            groups: null,
          };

          delete userToReturn.password;

          return res.json({ ...userToReturn });
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
