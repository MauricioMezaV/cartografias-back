"use strict";

const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");

// SERVICE IMPORTS:
const settings = require("./settings");
const model = require("./model");

//Actions
const create = require("./actions/create");
const update = require("./actions/update");
const get = require("./actions/get");
const list = require("./actions/list");

module.exports = {
	name: "victims",
	version: 1,

	mixins: [DbService],
	adapter: new MongooseAdapter(
		"mongodb+srv://mmezav:ARWoLoQLn5PtN63k@cluster0.ff3uf.mongodb.net/cartografias?retryWrites=true&w=majority&appName=Cluster0",
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

	/**
	 * Actions
	 */
	actions: {
		list,
		create,
		get,
		update,
	},

	hooks: {},

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
