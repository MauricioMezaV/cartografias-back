module.exports = {
	params: {
		message: { type: "string", optional: false, min: 1, max: 500 },
		address: { type: "string", optional: false },
		comuna: { type: "string", optional: false },
		provincia: { type: "string", optional: false },
		coordinates: {
			type: "array",
			optional: true,
			items: "number",
			length: 2,
		},
		victims: {
			type: "array",
			optional: true,
			items: "string",
		},
		perpetrators: {
			type: "array",
			optional: true,
			items: "string",
		},
	},
	async handler(context) {
		try {
			const { params } = context;
			const places = await this.adapter.insert(params);
			return Promise.resolve(places);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
