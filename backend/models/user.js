const mongoose = require("mongoose");



// Create Schema ( format for db)

const userSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    date: Date
})

module.exports = mongoose.model("user", userSchema);