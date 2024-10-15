"use strict"

const DbService = require("moleculer-db")
const MongooseAdapter = require("moleculer-db-adapter-mongoose")


// SERVICE IMPORTS:
const settings = require("./settings")
const model = require("./model")

// Actions
const create = require("./actions/create")
const forgotPassword = require("./actions/forgotPassword")
const login = require("./actions/login")
const confirmAccount = require("./actions/confirmAccount")
const me = require("./actions/me")
const newPassword = require("./actions/newPassword")
const Contact = require("./actions/Contact")
const update = require("./actions/update")

// Methods
const generateId = require("./methods/generateId")
const generateJWT = require("./methods/generateJWT")
const sendEmail = require("./methods/sendEmail")
const registerSendEmail = require("./methods/registerSendEmail")
const checkAuth = require("./methods/checkAuth")
const contactSendEmail = require("./methods/contactSendEmail")

module.exports = {
	name: "users",
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
	 * Actions
	 */
	actions: {
		create,
		forgotPassword,
		login,
		confirmAccount,
		me,
		newPassword,
		Contact,
		update,
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Service private methods
	 */
	methods: {
		generateId,
		generateJWT,
		sendEmail,
		registerSendEmail,
		checkAuth,
		contactSendEmail,
	},

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
