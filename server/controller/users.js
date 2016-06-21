var User = require('../models/users.js');
var _ = require('underscore');

module.exports = {

  getOne: function(id, callback) {
    User.findById(id)
    .then(function(user) {
      callback(null, user);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  addOne: function(user, callback) {
    User.create({
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then(function(addedUser) {
      callback(null, addedUser);
    })
    .catch(function(error) {
      callback(error);
    })
  },

  updateOne: function(id, newProps, callback) {
    this.getOne(id, function(err, user) {
      if(err) {return callback(err);}
      _.extend(user, newProps).save()
        .then(function(updatedUser) {
          callback(null, updatedUser);
        })
        .catch(function(error) {
          callback(error);
        });
    });
  },

  removeOne: function(id, callback) {
    this.getOne(id, function(err, user) {
      if(err) {return callback(err);}
      user.destroy()
        .then(function(updatedUser) {
          callback(null, updatedUser);
        })
        .catch(function(error) {
          callback(error);
        });
    });
  },

  getAll: function(callback) {
    User.findAll()
      .then(function(users) {
        callback(null, users);
      })
      .catch(function(error) {
        callback(error);
      });
  }
}
