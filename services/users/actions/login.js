const bcrypt = require("bcrypt");
module.exports = {
	params: {
		email: { type: "string" },
		password: { type: "string" },
	},
	async handler(context) {
		const { email, password } = context.params;
		let user = await this.adapter.findOne({ email });
		if (!user) {
			return Promise.reject("El usuario no existe");
		}

		if(!user.confirmed) {
			return Promise.reject("El usuario no está confirmado");
		}

		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return Promise.reject("La contraseña es incorrecta");
		}

		return Promise.resolve(user);
	}
}
