module.exports = {
	params: {
		message: { type: "string", optional: false, min: 1, max: 500 },
		abstract: { type: "string", optional: false },
		tipo: { type: "string", optional: false },
		comuna: { type: "string", optional: false },
		provincia: { type: "string", optional: false },
		coordinates: {
			type: "array",
			optional: false,
			items: "number",
			length: 2,
		},
	},
	async handler(context) {
		try {
			const { params } = context;
			const memorials = await this.adapter.insert(params);
			return Promise.resolve(memorials);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
