
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return File;
};
