module.exports = {
	/*
	 * Public fields
	 */
	fields: [
		"_id",
		"message",
		"abstract",
		"tipo",
		"comuna",
		"provincia",
		"coordinates"
	],

	/*
	 * Validation schema
	 */
	entityValidator: {
		id: {
			type: "string",
			required: true,
			unique: true
		},
		message: {
			type: "string",
			required: true
		},
		abstract: {
			type: "string",
			required: true
		},
		tipo: {
			type: "string",
			required: true
		},
		comuna: {
			type: "string",
			required: true
		},
		provincia: {
			type: "string",
			required: true
		},
		coordinates: {
			type: "array",
			items: {
				type: "number"
			},
			minItems: 2,
			maxItems: 2,
			required: true
		}
	}
};