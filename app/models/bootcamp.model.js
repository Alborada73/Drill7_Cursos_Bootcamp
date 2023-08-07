module.exports = (sequelize, DataTypes) => {
  const Bootcamp = sequelize.define("bootcamp", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "el campo title es requerido",
        },
      },
    },

    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: "cue debe ser un número entero",
        },
        min: {
          args: [5],
          msg: "cue debe ser igual o mayor que 5",
        },
        max: {
          args: [20],
          msg: "cue debe ser igual o mayor que 20",
        },
        notEmpty: {
          args: true,
          msg: "el campo cue es requerido",
        },
      },
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "el campo description es requerido",
        },
      },
    },
  });
  return Bootcamp;
};
