// ===============================================================================
// ROUTING
// ===============================================================================
var reservation = require("../models/reservations");
module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/tables", function (req, res) {
    reservation.findAll({
      where:{
        waitlist: false
      }
    }).then(data => res.json(data));
  });

  app.get("/api/waitlist", function (req, res) {
    reservation.findAll({
      where:{
        waitlist: true
      }
    }).then(data => res.json(data));

  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/tables", function (req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    
    //if length of reservation > 5, create waitlist = true
    //else waitlist = false
    
    reservation.count({
      where: {
        waitlist: false
      }
    }).then(result =>{
      var waitlist = true;
      if(result < 5){
        waitlist = false;
      }

      reservation.create({
        name: req.body.customerName,
        email: req.body.customerEmail,
        number: req.body.phoneNumber,
        waitlist: waitlist
      }).then(() => res.end());
    })

  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function () {
    reservation.destroy({})
    .then(()=> res.end());
  });
};
