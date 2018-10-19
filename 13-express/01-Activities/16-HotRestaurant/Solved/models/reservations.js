// Dependencies
// =============================================================
var db = require('../config/connection'),
 seqConnection = require("../config/connection.js");

// This may be confusing but here Sequelize (capital) references the standard library
 Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.

// Creates a "Chirp" model that matches up with DB
var Reservation = seqConnection.define("reservation", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.STRING
  },
  waitlist: {
    type: Sequelize.BOOLEAN
  }
}, {
  timestamps: false
});

// Syncs with DB
Reservation.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Reservation;
