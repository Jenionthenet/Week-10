'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addConstraint('Books', {
     fields: ['user_id'],
     type: 'FOREIGN KEY',
     name: 'user_id-fk-in-Books',
     references: {table: 'Users', field: 'id'}
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeConstraint(
     'Books',
     'user_id-fk-in-Books'
   )
  }
};
