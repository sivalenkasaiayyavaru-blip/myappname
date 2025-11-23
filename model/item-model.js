const db = require("../config/db");

module.exports = {
    itemsMdl(callback) {
        const sql = "SELECT * FROM grocery_items ORDER BY english_name ASC";
        db.query(sql, callback);   // callback(err, results)
    },

    // Get all measurement types
    measurementMdl(callback) {
        const sql = "SELECT * FROM measurements";
        db.query(sql, callback);
    },

    submitItemsMdl(values, callback) {
        const sql = `
            INSERT INTO orders_list 
            (item_id, english_name, telugu_name, quantity, measurement, month)
            VALUES ?
        `;

        db.query(sql, [values], callback); // callback(err, results)
    },

    getOrdersByMonthMdl(month, callback) {
        console.log('getOrdersByMonthMdl:',month)
        const sql = `SELECT * FROM orders_list WHERE month = ?`;

        db.query(sql, [month.data], callback);
    }
}
