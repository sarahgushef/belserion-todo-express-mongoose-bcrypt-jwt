const { Users } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../../config');
const { hashedPassword, comparePassword } = require('../../helpers');

module.exports = {
  userRegistration: async (req, res) => {
    try {
      // Check if user already registered
      const findRegisteredUser = await Users.findOne({
        email: req.body.email
      });

      if (findRegisteredUser) {
        res.send(`Email has been registered`);
      } else {
        // Hashing the Password
        const saltRounds = 10;
        const password = req.body.password;

        hashedPassword(password, saltRounds);

        const user = new Users({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        });

        const savedUser = await user.save();
        res.send({
          message: `User registered`
        });
      }
    } catch (error) {
      res.send(error);
    }
  },
  userLogin: async (req, res) => {
    try {
      const user = await Users.findOne({ email: req.body.email });

      if (user === null) {
        return res.send('Your email is not registered');
      } else {
        // Compare the encrypted password to the password in the database

        comparePassword(req.body.password, user.password);

        if (comparePassword) {
          const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, {
            expiresIn: '7d'
          });

          res.send({ message: 'You are logged in', token: token });
        } else {
          return res.send('password is not valid');
        }
      }
    } catch (error) {
      res.send(error);
    }
  }
};
