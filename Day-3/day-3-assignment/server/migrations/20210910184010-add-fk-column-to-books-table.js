'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Books', 'user_id', {
      type: Sequelize.INTEGER,
      refernces: {model:'Users', field: 'id'}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Books', 'user_id')
  }
};
