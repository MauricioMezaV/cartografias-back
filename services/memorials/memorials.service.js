"use strict"

const DbService = require("moleculer-db")
const MongooseAdapter = require("moleculer-db-adapter-mongoose")


// SERVICE IMPORTS:
const settings = require("./settings")
const model = require("./model")

module.exports = {
	name: "memorials",
	version: 1,

	mixins: [ DbService ],
	adapter: new MongooseAdapter("mongodb+srv://mmezav:ULYnoKWTxI3qQakZ@cluster0.ff3uf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
		socketTimeoutMS: process.env.MAX_ACTION_TIMEOUT,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	}),
	model,

	/**
	 * Service settings
	 */
	settings,

	/**
	 * Service dependencies
	 */
	dependencies: [],

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
	stopped() {}
}
