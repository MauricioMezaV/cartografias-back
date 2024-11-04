"use strict";

const ApiGateway = require("moleculer-web");

/**
 * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 * @typedef {import('http').IncomingMessage} IncomingRequest Incoming HTTP Request
 * @typedef {import('http').ServerResponse} ServerResponse HTTP Server Response
 * @typedef {import('moleculer-web').ApiSettingsSchema} ApiSettingsSchema API Setting Schema
 */

module.exports = {
	name: "api",
	version: 1,
	mixins: [ApiGateway],

	settings: {
		// Exposed port
		port: process.env.PORT || 8081,
		cors: {
			// Configures the Access-Control-Allow-Origin CORS header.
			origin: "*",
			// Configures the Access-Control-Allow-Methods CORS header.
			methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
			// Configures the Access-Control-Allow-Headers CORS header.
			allowedHeaders: ["Content-Type", "Authorization", "X-Origin"],
			// Configures the Access-Control-Expose-Headers CORS header.
			exposedHeaders: ["Content-Range"],
			// Configures the Access-Control-Allow-Credentials CORS header.
			credentials: true,
			// Configures the Access-Control-Max-Age CORS header.
			maxAge: 3600
		},
		routes: [
			{
				mappingPolicy: "restrict",

				whitelist: [

					// USERS
					"v1.users.list",
					"v1.users.create",
					"v1.users.get",
					"v1.users.update",
					"v1.users.remove",
					"v1.users.forgotPassword",
					"v1.users.login",
					"v1.users.confirmAccount",
					"v1.users.me",
					"v1.users.newPassword",
					"v1.users.Contact",

					//MEMORIALS
					"v1.memorials.list",
					"v1.memorials.create",
					"v1.memorials.get",
					"v1.memorials.update",
					"v1.memorials.remove",

					//PLACES
					"v1.places.list",
					"v1.places.create",
					"v1.places.get",
					"v1.places.update",
					"v1.places.remove",

					// GREETER
					"v1.greeter.hello",
					"v1.greeter.welcome",

					// PRODUCTS
					"v1.products.list",
					"v1.products.create",
					"v1.products.get",
					"v1.products.update",
					"v1.products.remove",
				],
				aliases: {
					// USERS
					"GET /users": "v1.users.list",
					"POST /users": "v1.users.create",
					"GET /users/:id": "v1.users.get",
					"PUT /users/:id": "v1.users.update",
					"DELETE /users/:id": "v1.users.remove",
					"POST /users/forgotPassword": "v1.users.forgotPassword",
					"POST /users/login": "v1.users.login",
					"GET /users/confirm/:token": "v1.users.confirmAccount",
					"GET /users/me": "v1.users.me",
					"POST /users/newPassword/:token": "v1.users.newPassword",
					"POST /users/Contact": "v1.users.Contact",
          
					//MEMORIALS
					"POST /memorials" : "v1.memorials.create",
					"REST /memorials": "v1.memorials",

					//PLACES
					"POST /places" : "v1.places.create",
					"REST /places": "v1.places",					
          
					// GREETER
					"GET /greeter/hello": "v1.greeter.hello",
					"GET /welcome/:name": "v1.greeter.welcome",

					// PRODUCTS
					"GET /products": "v1.products.list",
					"POST /products": "v1.products.create",
					"GET /products/:id": "v1.products.get",
					"PUT /products/:id": "v1.products.update",
					"DELETE /products/:id": "v1.products.remove",

				},
			}
		],
		assets: {
			folder: "public",
		}
	},
	methods: {
		onResponse(req, res, data) {
			// Asegúrate de que 'Content-Range' esté presente en las cabeceras
			if (!res.headers) {
				res.headers = {};
			}

			if (!res.headers["Content-Range"]) {
				// Aquí debes establecer el valor correcto según tu lógica de paginación
				const contentRange = "items 0-9/100";
				res.setHeader("Content-Range", contentRange);
			}

			// Devolver los datos de la respuesta
			return data;
		},


	},
};
