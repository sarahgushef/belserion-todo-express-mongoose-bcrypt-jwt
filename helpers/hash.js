const bcrypt = require('bcrypt');

const hashedPassword = async (password, saltRounds) => {
  const hash = await bcrypt.hash(password, saltRounds).then(hash => hash);

  return hash;
};

module.exports = hashedPassword;
