const contactSendEmail = require("../methods/contactSendEmail");

module.exports = {
	params: {},
	async handler(context) {
		let { name, email, message } = context.params;

		email = email.toLowerCase();

		try {
			contactSendEmail({
				name: name,
				email: email,
				message: message,
			});
			return Promise.resolve("El formulario se ha enviado exitosamente.");
		} catch (e) {
			console.log(e);
		}
	},
};
