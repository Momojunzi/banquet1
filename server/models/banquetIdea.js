const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ideaSchema = mongoose.Schema({
  agent: {type: String, required: true},
  location: {type: String, required: true},
  day: {type: String, required: true},
  time: { type: String, required: true},
  month: {type: String, required: true},
  eventType: {type: String, required: true},
  attendanceLikely: {type: String},
  comment: {type: String}
}, {collection: "BanquetIdea"});

const BanquetIdea = mongoose.model("BanquetIdea",ideaSchema);
module.exports = BanquetIdea;
