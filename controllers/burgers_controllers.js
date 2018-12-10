var db = require("../models");

module.exports = function(app) {

  // GET route 
  app.get("/", function(req, res) {

    db.Burger.findAll({}).then(function(dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };

      res.render("index", hbsObject);
    });
  });

  // POST route
  app.post("/", function(req, res) {
    console.log(req.body);

    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured

    }).then(function(dbBurger) {
      // res.json(dbBurger);
      res.redirect("/");
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  // PUT route
  app.put("/:id", function(req, res) {

    console.log(req.params.id);

    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.redirect("/");
    })
    .catch(function(err) {
      res.json(err);
    });
  });
};




