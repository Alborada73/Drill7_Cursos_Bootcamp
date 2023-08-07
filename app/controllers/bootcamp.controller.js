const db = require("../models");
const Bootcamp = db.bootcamps;
const User = db.users;

exports.createBootcamp = async (bootcamp) => {
  try {
    const createdBootcamp = Bootcamp.create({
      title: bootcamp.title,
      cue: bootcamp.cue,
      description: bootcamp.description,
    });

    console.log(
      `>> Creado el bootcamp: ${JSON.stringify(createdBootcamp, null, 4)}`
    );
    return createdBootcamp;
  } catch (error) {
    console.log(`>> Error al crear el bootcamp: ${error}`);
  }
};

exports.addUser = async (bootcampId, userId) => {
  try {
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    if (!bootcamp) {
      console.log("no se encontró el bootcamp");
      return null;
    }
    const user = await User.findByPk(userId);
    if (!user) {
      console.log("no se encontró el usuario");
      return null;
    }
    await bootcamp.addUser(user);
    console.log("***************************");
    console.log(
      `Agregado el usuario id=${user.id} al bootcamp con id=${bootcamp.id}`
    );
    console.log("***************************");
    return bootcamp;
  } catch (error) {
    console.log(
      ">> Error mientras se estaba agregando Usuario al Bootcamp",
      error
    );
  }
};

exports.findById = async (bootcampId) => {
  try {
    const bootcamp = await Bootcamp.findByPk(bootcampId, {
      include: [
        {
          model: User,
          as: "users",
          attributes: ["id", "firstName", "lastName"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    return bootcamp
  } catch (error) {}
};
