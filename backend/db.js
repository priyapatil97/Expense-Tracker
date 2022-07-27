const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/exptracker");

module.exports = mongoose;