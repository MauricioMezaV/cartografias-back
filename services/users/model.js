const mongoose = require("mongoose")

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: false,
	},
	password: {
		type: String,
		required: true,
	},
	token: {
		type: String,
		required: false,
	},
	confirmed: {
		type: Boolean,
		default: false,
	},
	authToken: {
		type: String,
		required: false,
	},
	role: {
		type: String,
		enum: ["admin", "super-admin"],
	}
}, {
	timestamps: true
})

const model = mongoose.model("users", schema)

module.exports = model
