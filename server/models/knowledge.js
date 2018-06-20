var mongoose = require('mongoose');

var knowledgeSchema = new mongoose.Schema({
  "title":String,
  "context":String
});

module.exports = mongoose.model("Knowledge",knowledgeSchema);