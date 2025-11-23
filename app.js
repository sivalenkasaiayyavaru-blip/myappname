const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json()); // Add this line to parse JSON request bodies


const port = 1542

app.use(cors());
app.get('/get', (req, res) => {
    res.send('Get Method calling done')
    console.log('get data is beginning')
})

app.get('/', (req, res) => {
    res.send('Enter the dragon')
})

app.post('/register', (req, res) => {
    const userData = req.body; // Data sent from Angular
    console.log('Received registration data:', userData);
    res.send({ message: 'Registration successful!', data: userData });
});

app.listen(1542, () => {
    console.log('server is running on port 1542')
})
