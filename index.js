const inquirer = require('inquirer');
const Sequelize = require('sequelize');
const Employee = require('./models/Employee');

function startApp() {
    inquirer
        .prompt([{
            type: "list",
            name: "derpartment",
            message: "What derpartment do you belong to?",
            choices: [new inquirer.Separator(), "Design", new inquirer.Separator(), "Production", new inquirer.Separator(), "Development", new inquirer.Separator(), "Release", new inquirer.Separator(), "Sales", new inquirer.Separator(), "Legal"]
        },
        {
            type: "input",
            name: "role",
            message: `What is your role in your department?`
        },
        {
            type: "input",
            name: "firstName",
            message: "What is your first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: `What is your last name?`
        }
    ]).then()
}

startApp();