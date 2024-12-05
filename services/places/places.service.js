"use strict";

const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");

// SERVICE IMPORTS:
const settings = require("./settings");
const model = require("./model");

//ACTIONS
const create = require("./actions/create");
const update = require("./actions/update");
const get = require("./actions/get");
const list = require("./actions/list");
module.exports = {
	name: "places",
	version: 1,

	mixins: [DbService],
	adapter: new MongooseAdapter(
		"mongodb+srv://mmezav:ULYnoKWTxI3qQakZ@cluster0.ff3uf.mongodb.net/cartografias?retryWrites=true&w=majority&appName=Cluster0",
		{
			socketTimeoutMS: process.env.MAX_ACTION_TIMEOUT,
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	),
	model,

	/**
	 * Service settings
	 */
	settings,

	/**
	 * Service dependencies
	 */
	dependencies: [],

	hooks: {
		before: {
			updateById: [
				async function (ctx) {
					if (!ctx.meta.user || ctx.meta.user.role !== "admin") {
						throw new Error(
							"Solo los administradores pueden actualizar memoriales",
						);
					}
				},
			],
		},
	},

	/**
	 * Actions
	 */
	actions: {
		list,
		create,
		get,
		update,
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {},
};
