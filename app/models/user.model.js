const { DataTypes } = require("sequelize");
const dbConfig = require("../config/db.config");

const User = dbConfig.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "el campo firstName es requerido",
      },
    },
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "el campo lastName es requerido",
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "el campo email es requerido",
      },
      isEmail: {
        msg: "el formato del email no es válido",
      },
    },
  },
});

module.exports = User;
