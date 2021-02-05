"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ProjetLangages", {
      langageId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
      },
      projetId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
      },
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE,
      deletedAt: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ProjetLangages");
  },
};
