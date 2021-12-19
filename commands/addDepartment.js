const db = require('../config/connection');
const inquirer = require('inquirer');
function addDepartment(sql, params) {
    const returnMain = require('../index')
    inquirer
        .prompt([
            {
                type: "input",
                name: "department",
                message: "Please enter the name of the new department: ",
                validate: departmentInput => {
                    if (departmentInput) {
                        return true;
                    } else {
                        console.log('Please enter a name for the department!');
                        return false;
                    }
                }
            }
        ])
        .then(data => {
            sql = `INSERT INTO departments (name) VALUES (?)`;
            params = [data.department];
            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`${data.department} added!`);
                }
                returnMain();
            });
        });
}

module.exports = addDepartment;