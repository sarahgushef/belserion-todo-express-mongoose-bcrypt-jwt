const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 6
    },
    email: {
      type: String,
      required: true,
      max: 225,
      min: 6
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      min: 6
    }
  },
  {
    timestamps: true
  }
);

UserSchema.plugin(AutoIncrement, {
  inc_field: 'id'
});

const Users = mongoose.model('User', UserSchema);

module.exports = Users;
