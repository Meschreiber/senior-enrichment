'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('student', {
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
  // campus: {
  //   type: Sequelize.STRING
  // }
  // change to ENUM based on campuses that exist?
})

