const db = require('../config/connection');
const inquirer = require('inquirer');
function updateEmployee(sql, params) {
    const returnMain = require('../index')
    inquirer
        .prompt([
            {
                type: "number",
                name: "employeeId",
                message: "Please enter the ID of the employee you'd like to update: ",
                validate: employeeIdInput => {
                    if (employeeIdInput) {
                        return true;
                    } else {
                        console.log("Please enter the ID!");
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "newRole",
                message: "Please enter the ID of the new role: ",
                validate: newRoleInput => {
                    if (newRoleInput) {
                        return true;
                    } else {
                        console.log("Please enter the new role ID!");
                        return false;
                    }
                }
            }
        ])
        .then(data => {
            sql = `UPDATE employees SET role_id = ?
        WHERE id =?`;
            params = [data.newRole, data.employeeId];
            db.query(sql, params, (err, rows) => {
                if (err) {
                    console.log("Make sure you have the correct ID!");
                } else {
                    console.log(`Updated role to: ${data.newRole}`);
                }
                returnMain();
            });
        });
}

module.exports = updateEmployee;