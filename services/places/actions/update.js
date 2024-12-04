module.exports = {
	params: {
		title: { type: "string", required: true, min: 1, max: 200 },
		authors: {
			type: "array",
			required: true,
			items: {
				type: "object",
				props: {
					name: { type: "string", required: true, min: 1, max: 100 },
				},
			},
			min: 1,
		},
		abstract: { type: "string", required: true, min: 1, max: 1000 },
		publicationDate: { type: "date", required: true },
		publicationLink: {
			type: "string",
			required: true,
			pattern: /^https?:\/\/.+$/,
		},
	},
	async handler(context) {
		try {
			const { params } = context;
			const { id } = params;
			const memorials = await this.adapter.updateById(id, {
				$set: params,
			});
			return Promise.resolve(memorials);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
