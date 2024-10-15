const bcrypt = require("bcrypt");
const generateId = require("../methods/generateId")
const generateJWT = require("../methods/generateJWT")
const sendEmail = require("../methods/sendEmail")
const registerSendEmail = require("../methods/registerSendEmail")

function isValidEmail(email) {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailRegex.test(email);
}

module.exports = {
	params: {},
	async handler(context) {
		let { name, email, password } = context.params;

		console.log(context.params)

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
			return Promise.reject("La contraseña debe tener más de 8 caracteres");
		}

		password = await bcrypt.hash(password, 10);

		user = {
			name,
			email,
			password,
			token: generateId(),
			authToken: generateJWT(),
		}

		await registerSendEmail({
			email: user.email,
			nombre: user.name,
			token: user.token,
		})

		await this.adapter.insert(user);

		return Promise.resolve(user);
	}
}
