require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { db, PORT } = require('./config');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES

app.use('/users', require('./routes/users'));

// Connect to Database and server
if (db) {
  app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
}
