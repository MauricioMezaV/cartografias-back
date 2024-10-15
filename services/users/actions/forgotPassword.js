const sendEmail = require("../methods/sendEmail")
const generateId = require("../methods/generateId")

module.exports = {
    params: {},
    async handler(context) {
        let { email } = context.params;

        email = email.toLowerCase();
        const user = await this.adapter.findOne({ email });
        if (!user) {
            return Promise.reject("Este email no está registrado");
        }

		console.log(user)

		try{
			user.token = generateId();
			const prueba = await this.adapter.updateById(user._id, user);

			sendEmail({
				email: user.email,
				name: user.name,
				token: user.token
			})
			return Promise.resolve("Se le ha enviado un correo para reestablecer la contraseña");
		} catch (e) {
			console.log(e)
		}

        sendEmail(email);
        return Promise.resolve("Se le ha enviado un correo para reestablecer la contraseña");
    }
}
