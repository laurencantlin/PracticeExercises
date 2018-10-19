// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("sequelize_chirpy", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

var sequelize = new Sequelize("jsj3x7apas6k575e", "iphn3fzpfbvf3c8m", "zzqdyh18m3mcr2aq", {
      host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      dialect: "mysql",
      port: 3306,
      pool: {
          max: 5,
          min: 0,
          idle: 10000,
      }
  });

// Exports the connection for other files to use
module.exports = sequelize;
