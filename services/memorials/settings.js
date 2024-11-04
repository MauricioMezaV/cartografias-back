module.exports = {
	/*
	 * Public fields
	 */
	fields: [
		"_id",               
		"type",            
		"properties",      
		"geometry"         
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
		type: {
			type: "string",
			enum: ["Feature"],
			default: "Feature"
		},
		properties: {
			message: {
				type: "string",
				required: true
			},
			abstract: {
				type: "string",
				required: true
			},
			imageId: {
				type: "number",
				required: true
			},
			iconSize: {
				type: "array",
				items: {
					type: "number"
				},
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
			tipo: {
				type: "string",
				required: true
			}
		},
		geometry: {
			type: {
				type: "string",
				enum: ["Point"],
				default: "Point"
			},
			coordinates: {
				type: "array",
				items: {
					type: "number"
				},
				required: true
			}
		}
	}
}