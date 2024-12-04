module.exports = {
	params: {},
	async handler(context) {
		try {
			const { id } = context.params;
			const memorials = await this.adapter.findById(id);
			return Promise.resolve(memorials);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
