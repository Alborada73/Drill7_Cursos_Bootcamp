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
