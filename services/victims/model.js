const mongoose = require("mongoose")

const schema = new mongoose.Schema({

}, {
    timestamps: true
})

const model = mongoose.model("victims", schema)

module.exports = model
