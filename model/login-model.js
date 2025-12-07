const db = require("../config/db");

module.exports = {

    loginMdl(values, callback) {
        console.log('loginMdl:', values)
        const sql = `
            SELECT username, password FROM users WHERE username=? and password=?`;
        params = [values.user_name, values.password]
        console.log('loginMdl params: ',params)
        db.query(sql, params, callback); // callback(err, results)
    }
}