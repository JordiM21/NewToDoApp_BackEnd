// es para gestionar la conexón a la base de datos
// sequelize init --> config

const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
	database: process.env.DB_NAME || "todo",
	username: process.env.DB_USER || "postgres",
	host: process.env.DB_HOST || "localhost",
	port: process.env.DB_PORT || 5432,
	password: process.env.DB_PASSWORD || "l0c0fl1n",
	dialect: "postgres",
});

module.exports = db;
