'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Problems', {
      id: {
        type: Sequelize.BIGINT(20),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      videoID: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      track: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      artist: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      startSeconds: {
        type: Sequelize.INTEGER,
      },
      endSeconds: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Problems');
  }
};