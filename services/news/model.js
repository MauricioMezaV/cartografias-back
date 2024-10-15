const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    image: {
        src: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
}, {
    timestamps: true
})

const model = mongoose.model("news", schema)

module.exports = model