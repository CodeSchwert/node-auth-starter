const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On Save Hook, encrypt password
// note, fat arrow function can't be used here!!
userSchema.pre('save', function(next) {
  const user = this;

  // generate salt
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    // encrypt password
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      // overwrite password with hash
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
