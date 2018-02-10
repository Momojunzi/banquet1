const db = require("../models");

module.exports = {
  createIdea: function(req, res) {
    console.log(req.body);
    db.BanquetIdea
      .create(req.body)
      .then(dbIdea =>{
        res.json(dbIdea)
        console.log(dbIdea)
      })
      .catch(err=>res.json(err))
  }
}
