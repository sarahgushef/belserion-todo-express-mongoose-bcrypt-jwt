const {
  PORT,
  DATABASE_HOST,
  DATABASE_NAME,
  JWT_SECRET
} = require('./environment');
const db = require('./connection');

module.exports = {
  PORT,
  DATABASE_HOST,
  DATABASE_NAME,
  JWT_SECRET,
  db
};
