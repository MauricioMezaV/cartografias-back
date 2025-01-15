const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
	message: { type: String, required: true },
	address: { type: String, required: true },
	comuna: { type: String, required: true },
	provincia: { type: String, required: true },
	coordinates: {
		type: [Number],
		required: true,
		validate: {
			validator: function (v) {
				return v.length === 2;
			},
			message: (props) => `${props.value} no es una coordenada válida`,
		},
	},
});

const Places = mongoose.model("Places", placesSchema);

module.exports = Places;
