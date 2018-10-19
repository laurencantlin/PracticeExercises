// ===============================================================================
// DATA
// =================================================================
  var lunches = [
    {
      lunch: "Beet & Goat Cheese Salad with minestrone soup."
    }, {
      lunch: "Pizza, two double veggie burgers, fries with a Big Gulp"
    }
  ];

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  
  // Routes
  app.get("/weekday", function(req, res) {
    res.render("index", lunches[0]);
  });
  
  app.get("/weekend", function(req, res) {
    res.render("index", lunches[1]);
  });
  
  app.get("/lunches", function(req, res) {
    res.render("all-lunches", {
      foods: lunches,
      eater: "david"
    });
  });
  
};
