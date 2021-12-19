const db = require('../config/connection');

function viewAll(sql) {
    const returnMain = require('../index')
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