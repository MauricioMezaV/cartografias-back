module.exports = {
	params: {},
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
