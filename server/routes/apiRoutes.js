const router = require('express').Router();
const Idea = require("../models/banquetIdea.js")
const ideaController = require("../controllers/ideaController.js")

router.route("/createIdea")
  .post(ideaController.createIdea);

router.route("/test")
  .get((req,res)=>{res.json("api test")});

module.exports = router;
