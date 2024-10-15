const jwt = require("jsonwebtoken");
const generarJWT = (id) => {
	return jwt.sign( { id },  "palabritaS3cr3t4", {
		expiresIn: "30d",
	});
};

module.exports = generarJWT;
