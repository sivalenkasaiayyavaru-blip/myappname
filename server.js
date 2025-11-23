const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const { error } = require('console');

app.use(cors());
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const itemRoutes = require("./routes/item-routes");
const loginRoutes = require("./routes/login-routes");

app.use("/", itemRoutes);
app.use("/", loginRoutes);

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'kirana'
// })

// connection.connect((err) => {
//     if (err) {
//         console.log('Server error')
//         return;
//     } else
//         console.log('Connected to database ')

// })

app.listen(4600, () => {
    console.log('server is running on port 4600')
})

app.get('/', (req, res) => {
    res.send('This is test case')
})

// app.post("/items", (req, res) => {
//     connection.query("SELECT * FROM grocery_items", (err, results) => {
//         console.log(results)
//         if (err) throw err;
//         res.json(results);
//     });
// });

// app.post("/measurements", (req, res) => {
//     connection.query("SELECT * FROM measurements", (err, results) => {
//         console.log(results)
//         if (err) throw err;
//         res.json(results);
//     });
// });

// app.post("/submitItems", (req, res) => {
//     console.log("REQ BODY:", req.body);
//     const { month, selectedItems } = req.body;

//     const sql = `
//     INSERT INTO orders_list (item_id, english_name, telugu_name,quantity, measurement, month)
//     VALUES ?
//   `;

//     const values = selectedItems.map(item => [
//         item.item_id,
//         item.english_name,
//         item.telugu_name,
//         item.quantity,
//         item.measurement.measurement,
//         month
//     ]);

//     console.log('submitted:',values)

//     connection.query(sql, [values], (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ message: "Database error" });
//         }

//         res.json({ message: "Items inserted!", results });
//     });
// });