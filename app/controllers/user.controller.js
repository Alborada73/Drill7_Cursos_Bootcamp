const db = require("../models");
const Bootcamp = db.bootcamps;
const User = db.users;

exports.createUser = async (user) => {
  try {
    const createdUser = User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });

    console.log(
      `>> Se ha creado el usuario: ${JSON.stringify(createdUser, null, 4)}`
    );
    return createdUser;
  } catch (error) {
    console.log(`>> Error al crear el usuario: ${error}`);
  }
};

exports.findUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    return user;
  } catch (error) {
    console.log(`>> Error mientras se encontraba el usuario: ${error}`);
  }
};

exports.findAllUsers = async () => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Bootcamp,
          as: "bootcamps",
          attributes: ["id", "title"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    return users;
  } catch (error) {
    console.log(`>> Error buscando los users: ${error}`);
  }
};

exports.updateUserById = async (userId, firstName, lastName) => {
  try {
    const updatedUser = await User.update(
      {
        firstName: firstName,
        lastName: lastName,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    console.log(
      `>> Se ha actualizado el usuario: ${JSON.stringify(updatedUser, null, 4)}`
    );
    return updatedUser;
  } catch (error) {
    console.log(`>> Error mientras se actualizaba el usuario: ${error}`);
  }
};

exports.deleteUserById = async (userId) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id: userId,
      },
    });
    console.log(
      `>> Se ha eliminado el usuario: ${JSON.stringify(deletedUser, null, 4)}`
    );
    return deletedUser;
  } catch (error) {
    console.log(`>> Error mientras se eliminaba el usuario: ${error}`);
  }
};