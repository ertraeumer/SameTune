const {
  User, Genre, Instrument, Group, Location, UserGenre,
} = require('../../db/models');

const editUser = async (req, res) => {
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    console.log(updatedFields);
    let updatedUser;
    try {
      if ('name' in updatedFields || 'profile' in updatedFields || 'phone' in updatedFields) {
        [, updatedUser] = await User.update(updatedFields, {
          where: {
            id: req.session.user.id,
          },
          returning: true,
          plain: true,
          raw: true,
        });
      }

      if ('location' in updatedFields) {
        const newLocation = await Location.findOne({
          where: {
            name: updatedFields.location,
          },
        });
        [, updatedUser] = await User.update({ locationId: newLocation.id }, {
          where: {
            id: req.session.user.id,
          },
          returning: true,
          plain: true,
          raw: true,
        });
      }

      if ('genres' in updatedFields) {
        const newGenre = await Genre.findOne({
          where: {
            name: updatedFields.genres,
          },
        });
        await UserGenre.update({ genreId: newGenre.id }, {
          where: {
            id: req.session.user.id,
          },
          returning: true,
          plain: true,
          raw: true,
        });
        updatedUser = await User.findOne({
          where: {
            id: req.session.user.id,
          },
          raw: true,
        });
      }

      const currentUserInfo = await User.findAll({

        where: {
          id: req.session.user.id,
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
      const groupsIds = [...new Set(currentUserInfo.map((el) => el['Groups.id']))];
      const location = currentUserInfo[0]['Location.name'];

      const resGroups = [];

      groups.forEach((el, i) => resGroups.push({ name: el, id: groupsIds[i] }));

      const userToReturn = {
        ...updatedUser,
        genres,
        instruments,
        groups: resGroups,
        location,
      };

      if (userToReturn.instruments.length === 1) {
        if (userToReturn.instruments[0] === null) {
          userToReturn.instruments = null;
        }
      }

      if (userToReturn.genres.length === 1) {
        if (userToReturn.genres[0] === null) {
          userToReturn.genres = null;
        }
      }

      if (userToReturn.groups.length === 1) {
        if (userToReturn.groups[0] === null) {
          userToReturn.groups = null;
        }
      }

      delete userToReturn.password;

      return res.json({ ...userToReturn });
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(418);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const currentUserInfo = await User.findAll({

      where: {
        id,
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
    const groupsIds = [...new Set(currentUserInfo.map((el) => el['Groups.id']))];
    const location = currentUserInfo[0]['Location.name'];

    const resGroups = [];

    groups.forEach((el, i) => resGroups.push({ name: el, id: groupsIds[i] }));

    const gotUser = {
      id: currentUserInfo[0].id,
      name: currentUserInfo[0].name,
      email: currentUserInfo[0].email,
      phone: currentUserInfo[0].phone,
      profile: currentUserInfo[0].profile,
      genres,
      instruments,
      groups: resGroups,
      location,
    };

    delete gotUser.password;

    return res.json({ ...gotUser });
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  editUser,
  getUser,
};
