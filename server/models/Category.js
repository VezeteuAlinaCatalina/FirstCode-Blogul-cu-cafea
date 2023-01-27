const { MongoRuntimeError } = require('mongodb');
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
   title: {
    type: String,
    require: true
   },
   text: {
    type: String
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Article', articleSchema);