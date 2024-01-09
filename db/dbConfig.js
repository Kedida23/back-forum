const mysql2 = require("mysql2");
require("dotenv").config();
const dbconnection = mysql2.createPool({
	// user: "forum-evangadi",
	// database: "forum-evangadi",
	// host: "localhost",
	// connectionLimit: 10,
	user: process.env.USER,
	database: process.env.DATABASE,
	host: process.env.HOST,
	connectionLimit: process.env.LIMIT,
	password: process.env.PASSWORD,
});

module.exports = dbconnection.promise();
