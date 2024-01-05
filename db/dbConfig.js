const mysql2 = require("mysql2");
require("dotenv").config();
const dbconnection = mysql2.createPool({
	user: "forum-evangadi",
	database: "forum-evangadi",
	host: "localhost",
	connectionLimit: 10,
	// user: process.env.USER,
	// database: process.env.DATABASE,
	// host: process.env.HOST,
	// password: process.env.PASSWORD,
	// connectionLimit: process.env.LIMIT,
});


module.exports = dbconnection.promise();
