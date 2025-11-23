const db = require("../config/db");

module.exports = {

    loginMdl(values, callback) {
        console.log('loginMdl:', values)
        const sql = `
            SELECT username, password FROM users WHERE username=? and password=?`;

        db.query(sql, [values.user_name, values.password], callback); // callback(err, results)
    }
}