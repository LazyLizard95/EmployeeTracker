const db = require('../config/connection');

function viewAllEmployees(sql) {
    sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS title, departments.name AS department, roles.salary AS salary, manager_id AS manager
    FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id`;//as renames. //left join joins two different tables first one being primary. //grab everything from employee then rename a few of em.//6 join roles tables where employees role id is equal to roles id
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Here are the employees: ");
            console.table(rows);
        }
        returnMain();
    })
}

module.exports = viewAllEmployees;