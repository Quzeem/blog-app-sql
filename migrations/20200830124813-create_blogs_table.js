'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
    // Add altering commmands here
    await queryInterface.createTable('blogs', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      created_date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.fn('NOW')
      }
    });
  },

  down: async (queryInterface) => {
    // Add reverting commands here.
    await queryInterface.dropTable('blogs');
  }
};
