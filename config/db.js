// const mysql = require("mysql2");

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "kirana"
// });

// db.connect(err => {
//     if (err) {
//         console.log("DB Connection Failed:", err);
//         return;
//     }
//     console.log("Connected to Database");
// });

// module.exports = db;


// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "gateway01.ap-southeast-1.prod.aws.tidbcloud.com",
//   port: 4000,
//   user: "XmiT11tWLB4Fqtz.root",
//   password: "QKUGiQpxL398mJGo",
//   database: "test",   // default DB, you can change
//   ssl: {
//     ca: require("fs").readFileSync("isrgrootx1.pem")  // path to downloaded certificate
//   }
// });

// connection.connect((err) => {
//   if (err) {
//     console.error("❌ MySQL connection failed:", err);
//   } else {
//     console.log("✅ Connected to TiDB successfully!");
//   }
// });

// module.exports = connection;



// const mysql = require('mysql2');
// require('dotenv').config();

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   ssl: { rejectUnauthorized: false } // critical for TiDB Cloud
// });

// connection.connect(err => {
//   if (err) console.error('❌ DB connection failed:', err.message);
//   else console.log('✅ Connected to TiDB successfully!');
// });

// module.exports = connection;


const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: {rejectUnauthorized:true}
});

connection.connect(err => {
  if (err) {
    console.error('❌ DB connection failed:', err.message);
  } else {
    console.log('✅ Connected to DB successfully!');
  }
});

module.exports = connection;