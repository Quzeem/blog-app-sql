const { DataTypes } = require('sequelize');
const { db } = require('../config/db');

// Create a Model(Table) for blogs
const Blog = db.define('blog', {
  // Model attributes(Table columns) are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Blog;
