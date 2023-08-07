const db = require("./app/models");
const bootcampController = require("./app/controllers/bootcamp.controller");
const userController = require("./app/controllers/user.controller");

const run = async () => {
  const bootcamp1 = await bootcampController.createBootcamp({
    title: "Introduciendo El Bootcamp De React",
    cue: 10,
    description:
      "React es la librería más usada en JavaScript para el desarrollo de interfaces",
  });

  const user1 = await userController.createUser({
    firstName: "Mateo",
    lastName: "Díaz",
    email: "mateo.diaz@correo.com",
  });
};

db.sequelize

  .sync({
    force: true,
  })

  .then(() => {
    console.log("Sincronizando tabla intermedia");

    run();
  });
