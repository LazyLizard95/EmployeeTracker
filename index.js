const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');
const viewAll = require('./commands/viewAll');
const viewAllEmployees = require('./commands/viewAllEmployees');
const viewRoles = require('./commands/viewRoles');

function startApp() {
    console.log('Welcome!')
    inquirer
        .prompt([{
            type: "list",
            name: "nav",
            message: "Please choose an option from the menu",
            choices: ["View all departments", new inquirer.Separator(), "View all roles", new inquirer.Separator(), "View all employees", new inquirer.Separator(), "Add derpartment", new inquirer.Separator(), "Add role", new inquirer.Separator(), "Add employee", new inquirer.Separator(), "Update employee role", new inquirer.Separator()]
        }]).then(data => {
            let sql;
            let params;
            switch (data.nav) {
                case "View all departments":
                    viewAll(sql);
                    break;
                case "View all roles":
                    viewRoles(sql);
                    break;
                case "View all employees":
                    viewAllEmployees(sql);
                    break;
                case "Add derpartment":
                    addDepartment(sql, params);
                    break;
                case "Add role":
                    addRole(sql, params);
                    break;
                case "Add employee":
                    addEmployee(sql, params);
                    break;
                case "Update employee role":
                    updateEmployee(sql);
                    break;
                default:
                    console.log("Case not found");
                    break;

            }
        })
}

function addDepartment(sql, params) {
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

function addRole(sql, params) {
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




function addEmployee(sql, params) {
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

function updateEmployee(sql, params) {




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


function returnMain() {
    inquirer.
        prompt([{
            type: "confirm",
            name: 'confirm',
            message: 'Return to main menu?'
        }]).then(data => {
            if (data.confirm === true) {
                startApp();
            } else { console.log("Program terminated. CRTL + C to close. Goodbye") }
        })

}


//Data.department insert into roles
//data.role insert into r
//data.

startApp();


module.exports = returnMain;




