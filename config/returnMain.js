const inquirer = require('inquirer');
const startApp = require('../index')
function returnMain() {
    inquirer.
        prompt([{
            type: "confirm",
            name: 'confirm',
            message: 'Return to main menu?'
        }]).then(data => {
            if (data.confirm === true) {
                startApp();
            } else { Console.log("Program terminated. CRTL + C to close. Goodbye") }
        })

}

module.exports = returnMain;