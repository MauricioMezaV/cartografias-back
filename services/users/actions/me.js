module.exports = {
	params: {},
	async handler(context) {
		try {
			const { params, user } = context.meta;
			const users = await this.adapter.findOne({ authToken: user });
			console.log(users);
			return Promise.resolve(users);
		} catch (error) {
			console.log('error', error);
			return Promise.reject(error);
		}
	}
}
