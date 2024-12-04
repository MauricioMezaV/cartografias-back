const bcrypt = require("bcrypt");

module.exports = {
	params: {},
	async handler(context) {
		try {
			let { name, email, password } = context.params;

			console.log(context.params);

			if (!email) {
				return Promise.reject("El email es obligatorio");
			}

			if (!password) {
				return Promise.reject("La contraseña es obligatoria");
			}

			if (!isValidEmail(email)) {
				return Promise.reject("El email no es válido");
			}

			email = email.toLowerCase();

			let user = await this.adapter.findOne({ email });

			if (user) {
				return Promise.reject("El email ya está registrado");
			}

			if (password.length < 8) {
				return Promise.reject(
					"La contraseña debe tener más de 8 caracteres",
				);
			}

			password = await bcrypt.hash(password, 10);

			user = {
				name,
				email,
				password,
			};

			await this.adapter.updateById(user._id, user);
		} catch (error) {
			console.log("error", error);
			return Promise.reject(error);
		}
	},
};
