module.exports = {
	params: {},
	async handler(context) {
		try {
			const { params } = context;
			const places = await this.adapter.find({});
			return Promise.resolve(places);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
