module.exports = {
	params: {},
	async handler(context) {
		try {
			const { params } = context.params;
			const memorials = await this.adapter.find({});
			return Promise.resolve(memorials);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
