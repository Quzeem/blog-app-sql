require('dotenv').config();
const { Sequelize } = require('sequelize');

const DB_URI =
  process.env.NODE_ENV === 'production'
    ? process.env.PROD_DATABASE_URL
    : process.env.DEV_DATABASE_URL;
const db = new Sequelize(DB_URI, {
  dialect: 'postgres',
  logging: false,
  define: {
    timestamps: false,
  },
});

// Test DB connection
const testDBConn = async () => {
  try {
    await db.authenticate();
    console.log('Successfully connected to the database.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
};

module.exports = { db, testDBConn };
