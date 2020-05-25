const { Sequelize, DataTypes } = require("sequelize");

module.exports = sequelize.define("problems", {
  id: {
    type: DataTypes.BIGINT(20),
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  videoID: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  track: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  startSeconds: {
    type: DataTypes.INTEGER,
  },
  endSeconds: {
    type: DataTypes.INTEGER,
  },
}, {
    timestamps: false
});
