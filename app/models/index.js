const users = require("./user.model");
const bootcamps = require("./bootcamp.model");

users.belongsToMany(bootcamps, {
  through: "user_bootcamp",
  as: "bootcamps",
  foreignKey: "user_id",
});
