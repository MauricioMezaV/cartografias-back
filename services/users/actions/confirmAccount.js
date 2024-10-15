module.exports = {
	params: {
		token: { type: "string" }
	},
	async handler(context) {
		const { token } = context.params;
		const user = await this.adapter.findOne({ token });
		console.log(user)
		try {
			user.confirmed = true;
			user.token = "";
			const prueba = await this.adapter.insert(user);
			return prueba;
		} catch (e) {
			console.log(e);
		}
	}
}
