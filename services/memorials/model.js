const mongoose = require("mongoose");

const memorialsSchema = new mongoose.Schema({
	message: { type: String, required: true },
	abstract: { type: String, required: true },
	tipo: { type: String, required: true },
	comuna: { type: String, required: true },
	provincia: { type: String, required: true },
    coordinates: [
        {
            coord: {type: Number, 
                required: true}
        }
    ],
});

const Memorials = mongoose.model("Memorials", memorialsSchema);

module.exports = Memorials;
