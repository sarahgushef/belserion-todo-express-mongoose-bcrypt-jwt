const mongoose = require('mongoose');
const { DATABASE_HOST, DATABASE_NAME } = require('./environment');

mongoose.connect(
  `${DATABASE_HOST}/${DATABASE_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  () => {
    console.log(`Connected to database`);
  }
);

const db = mongoose.connection;

module.exports = db;
