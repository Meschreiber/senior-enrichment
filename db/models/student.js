'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  testimonial: {
    type: Sequelize.TEXT
  }
  // campusId: {
  //   type: Sequelize.INTEGER
  // }
})

