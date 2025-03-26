const mongoose = require("mongoose");

const placesSchema = new mongoose.Schema({
	message: { type: String, required: true },
	address: { type: String, required: true },
	comuna: { type: String, required: true },
	provincia: { type: String, required: true },
    coordinates: [
        {
            coord: {type: Number, 
                required: true}
        }
    ],
	victims: {
		type: [String],
		required: false
	},
	perpetrators: {
		type: [String],
		required: false
	},
});

const Places = mongoose.model("Places", placesSchema);

module.exports = Places;
