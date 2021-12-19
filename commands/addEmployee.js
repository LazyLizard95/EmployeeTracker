const db = require('../config/connection');
const inquirer = require('inquirer');
function addEmployee(sql, params) {
    const returnMain = require('../index')
    inquirer
        .prompt([
            {
                type: "input",
                name: "empF",
                message: "Please enter the first name: ",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a first name');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "empL",
                message: "Please enter the last name: ",
                validate: lastInput => {
                    if (lastInput) {
                        return true;
                    } else {
                        console.log('Please enter a last name');
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "emp_id",
                message: "Please enter the role id: ",
                validate: IdInput => {
                    if (IdInput) {
                        return true;
                    } else {
                        console.log('Please enter an role ID!');
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "mana_id",
                message: "Please enter the manager id: ",
                validate: manaIdInput => {
                    if (manaIdInput) {
                        return true;
                    } else {
                        console.log('Please enter an manager ID!');
                        return false;
                    }
                }
            },

        ]).then(data => {
            sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
            params = [data.empF, data.empL, data.emp_id, data.mana_id];
            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`${data.empF}, ${data.empL}, ${data.emp_id}, ${data.mana_id} added!`);
                }
                returnMain();
            });
        });
}

module.exports = addEmployee;