const mysql = require('mysql2');
require('dotenv').config();



const db = mysql.createConnection(
  {
      host: 'localhost',
      user: 'root',
      password: 'WarriorPathTheMadKing2021',
      database: 'employee_roster'
  },
  console.log('Connected to the employee_tracker database!')
);

module.exports = db;




// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//   },
//     console.log('Connected to the employee tracker!')
//   );

// module.exports = db;

//WHY DOES IT CRASH WHEN I USE ENV???