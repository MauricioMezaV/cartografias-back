const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ['Feature'],
        default: 'Feature'
    },
    properties: {
        message: {
            type: String,
            required: true
        },
        abstract: {
            type: String,
            required: true
        },
        imageId: {
            type: Number,
            required: true
        },
        iconSize: {
            type: [Number],
            required: true
        },
        comuna: {
            type: String,
            required: true
        },
        provincia: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        }
    },
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

const model = mongoose.model("memorials", schema)

module.exports = model