const nodemailer = require("nodemailer");

const contactSendEmail = async (datos) => {
	const { email, name, message } = datos;

	var transport = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		auth: {
			user: "mauriciomv.cdp@gmail.com",
			pass: "exefidwaeosppnwi",
		},
	});

	const info = await transport.sendMail({
		from: '"Cartografías - Contacto"',
		to: "rodrigo.llancao@pregrado.uoh.cl",
		subject:
			"Has recibido un nuevo formulario desde el contacto Cartografías",
		text: "Comprueba tu cuenta en UpTask",
		html: `<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Mensaje de Contacto Cartografías O'Higgins</title>
	</head>
	<body style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4;">
		<div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1); text-align: left;">
			<h1 style="color: #333; text-align: center;">Mensaje de Contacto</h1>
			<p style="color: #555;"><strong>Nombre del remitente:</strong> ${name}</p>
			<p style="color: #555;"><strong>Email del remitente:</strong> ${email}</p>
			<div style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
				<p style="color: #555; font-weight: bold;">Mensaje:</p>
				<p style="color: #555;">${message}</p>
			</div>
		</div>
	</body>`,
	});
};

module.exports = contactSendEmail;
