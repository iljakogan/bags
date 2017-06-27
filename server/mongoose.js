var mongoose = require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://first:test1234@ds135252.mlab.com:35252/iljakogantodo');

module.exports = { mongoose};