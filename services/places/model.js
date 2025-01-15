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
				return v.length === 2 || v.length === 0;
			},
			message: (props) => `${props.value} no es una coordenada válida`,
		},
	},
	victims: [
        {
            name: {type: String, 
                required: false}
        }
    ],
	perpetrators: [
        {
            name: {type: String, 
                required: false}
        }
    ],
});

const Places = mongoose.model("Places", placesSchema);

module.exports = Places;
