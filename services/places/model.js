const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    authors: [
        {
            name: {type: String, 
                required: true}
        }
    ],
    abstract: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    publicationLink: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const model = mongoose.model("places", schema)

module.exports = model