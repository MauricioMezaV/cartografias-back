const nodemailer = require('nodemailer');

const registerSendEmail = async (datos) => {
	const { email, nombre, token } = datos;

	var transport = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		auth: {
			user: "mauriciomv.cdp@gmail.com",
			pass: "exefidwaeosppnwi"
		}
	});

	const info = await transport.sendMail({
		from: '"Cartografías - Administrador"',
		to: email,
		subject: "Cartografías",
		text: "Comprueba tu cuenta en UpTask",
		html: `<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Bienvenido a Cartografías</title>
		</head>
		<body style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4;">
			<div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
				<h1 style="color: #333;">¡Hola, ${nombre}!</h1>
				<p style="color: #555;">Te damos la bienvenida a Cartografías.</p>
				<p style="color: #555;">Para activar tu cuenta, haz clic en el siguiente botón:</p>
				<a href="https://hpc-uoh.vercel.app/confirmar-cuenta/${token}" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 20px;">Confirmar cuenta</a>
			</div>
		</body>`
	});
};

module.exports = registerSendEmail;
