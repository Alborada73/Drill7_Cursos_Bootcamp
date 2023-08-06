const UserBootcamp = {
  users: require("./user.model"),
  bootcamps: require("./bootcamp.model"),
};

UserBootcamp.users.belongsToMany(UserBootcamp.bootcamps, {
  through: "user_bootcamp",
  as: "bootcamps",
  foreignKey: "user_id",
});

UserBootcamp.bootcamps.belongsToMany(UserBootcamp.users, {
  through: "user_bootcamp",
  as: "users",
  foreignKey: "bootcamp_id",
});

module.exports = UserBootcamp;
