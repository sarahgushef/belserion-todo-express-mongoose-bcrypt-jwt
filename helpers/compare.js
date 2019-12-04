const bcrypt = require('bcrypt');

const comparePassword = async (bodyPassword, hashedPassword) => {
  const validPassword = await bcrypt
    .compare(bodyPassword, hashedPassword)
    .then(result => result);

  return validPassword;
};

module.exports = comparePassword;
