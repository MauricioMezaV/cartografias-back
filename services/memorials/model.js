const mongoose = require("mongoose");

const memorialsSchema = new mongoose.Schema({
	message: { type: String, required: true },
	abstract: { type: String, required: true },
	tipo: { type: String, required: true },
	comuna: { type: String, required: true },
	provincia: { type: String, required: true },
	coordinates: {
		type: [Number],
		required: true,
		validate: {
			validator: function (v) {
				return v.length === 2 || v.length === 0;
			},
			message: (props) => `${props.value} no es una coordenada válida`,
		},
	},
});

const Memorials = mongoose.model("Memorials", memorialsSchema);

module.exports = Memorials;
