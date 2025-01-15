module.exports = {
	params: {},
	async handler(context) {
		try {
			const { id } = context.params;
			const places = await this.adapter.findById(id);
			return Promise.resolve(places);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
