const user = require("./app/models/user.model");
const bootcamp = require("./app/models/bootcamp.model");
const userBootcamp = require("./app/models/index");
const { sequelize } = require("./app/config/db.config");

(async () => {
  try {
    await user.sync({ force: true });
    console.log("tabla user creada exitosamente");
  } catch (error) {
    console.error("error al crear la tabla:", error);
  }
})();

(async () => {
  try {
    await bootcamp.sync({ force: true });
    console.log("tabla bootcamp creada exitosamente");
  } catch (error) {
    console.error("error al crear la tabla:", error);
  }
})();

(async () => {
  try {
    await userBootcamp.sync({ force: true });
    console.log("tabla userBootcamp creada exitosamente");
  } catch (error) {
    console.error("error al crear la tabla:", error);
  }
})();