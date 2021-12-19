const db = require('../config/connection');
const inquirer = require('inquirer');
function addRole(sql, params) {
    const returnMain = require('../index')
    inquirer
        .prompt([
            {
                type: "input",
                name: "roles",
                message: "Please enter the name of the new role: ",
                validate: rolesInput => {
                    if (rolesInput) {
                        return true;
                    } else {
                        console.log('Please enter a name for the role!');
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "salary",
                message: "Please enter the salary of the new role: ",
                validate: salaryInput => {
                    if (salaryInput) {
                        return true;
                    } else {
                        console.log('Please enter a salary for the role!');
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "department_id",
                message: "Please enter the department id: ",
                validate: departmentIdInput => {
                    if (departmentIdInput) {
                        return true;
                    } else {
                        console.log('Please enter a department ID!');
                        return false;
                    }
                }
            },

        ]).then(data => {
            sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
            params = [data.roles, data.salary, data.department_id];
            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`${data.role}, ${data.salary}, ${data.department_id} added!`);
                }
                returnMain();
            });
        });
}

module.exports = addRole;