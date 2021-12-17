const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
    console.log('Connected to the employee tracker!')
  );

module.exports = db;

