const db = require("../models");

module.exports = {
  createIdea: function(req, res) {
    db.BanquetIdea
      .create(req.body)
      .then(dbIdea =>{
        res.json(dbIdea)
      })
      .catch(err=>res.json(err))
  },
  getIdeas: function(req, res) {
    db.BanquetIdea
      .find({})
      .then(results =>{
        res.json(results);
      })
      .catch(err=>res.json(err))
  }
}
