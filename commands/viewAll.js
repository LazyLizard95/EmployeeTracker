const db = require('../config/connection');

function viewAll(sql) {
    sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.table(rows);
        }
        returnMain()
    })
}

module.exports = viewAll;