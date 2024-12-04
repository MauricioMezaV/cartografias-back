const bcrypt = require("bcrypt");
module.exports = {
	params: {},
	async handler(context) {
		const { params } = context;
		const { password, token } = params;

		const user = await this.adapter.findOne({ token });

		if (user) {
			user.password = await bcrypt.hash(password, 10);

			user.token = "";

			try {
				const prueba = await this.adapter.updateById(user._id, user);
				return prueba;
			} catch (e) {
				console.log(e);
			}
		} else {
			return Promise.reject("El token no es válido");
		}
	},
};
