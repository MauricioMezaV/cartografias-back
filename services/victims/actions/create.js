module.exports = {
	params: {},
	async handler(context) {
		try {
			const { params } = context;
			const memorials = await this.adapter.insert(params);
			return Promise.resolve(memorials);
		} catch (error) {
			console.log('error', error);
			return Promise.reject(error);
		}
	}
}
