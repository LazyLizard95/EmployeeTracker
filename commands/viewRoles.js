const db = require('../config/connection');

function viewRoles(sql) {
    sql = `SELECT roles.id, roles.title, roles.salary, departments.name
    AS department
    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Here are the roles: ");
            console.table(rows);
        }
        returnMain();
    })
}

module.exports = viewRoles;