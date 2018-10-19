// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservationList = [{
    name: "Human",
    email: "human@.com",
    phone: "111-111-1111",
    uniqueID: "1234"
}];

var waitList = [{
    name: "Human2",
    email: "human@.com",
    phone: "111-111-1111",
    uniqueID: "1234"
}];

// Data
// ===============================================================================

// API Routes
// ===============================================================================

app.post('/api/new', function (req, res){
    var newListObj = req.body;
    var reserved = true;
    if (reservationList.length > 4){
        waitList.push(newListObj);
        res.json(reserved);
    }
    else {
        reservationList.push(newListObj);
        res.json(!reserved);
    }
});

app.get("/api/reservation", function(req, res) {
    var allReservations = {};
    allReservations.reservationList = reservationList;
    allReservations.waitList = waitList;
    res.json(allReservations);
  });

// HTML Routes
// ===============================================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
